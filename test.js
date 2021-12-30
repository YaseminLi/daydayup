const orderTicketIDs = [
  {
    checkCode: '21111910484223901001',
    layoutId: 183,
    ticketId: 1,
    tranNumber: '111',
    transactionId: 8968,
  },
  {
    checkCode: '21111910484223901001',
    layoutId: 183,
    ticketId: 2,
    tranNumber: '111',
    transactionId: 8968,
  },
  {
    checkCode: '21111910484223901001',
    layoutId: 184,
    ticketId: 1,
    tranNumber: '222',
    transactionId: 8968,
  },
  {
    checkCode: '21111910484223901001',
    layoutId: 185,
    ticketId: 2,
    tranNumber: '222',
    transactionId: 8968,
  },
];

const layoutTemplates = {
  183: {
    ticketLayoutSvg: 'ticketLayoutSvg-183',
  },
  184: {
    ticketLayoutSvg: 'dddd',
  },
  185: {
    ticketLayoutSvg: 'ticketLayoutSvg-185',
  },
};

const printTicket = list => {
  console.log('printTicket', list);
};

const onTicketPrintError = err => {
  console.log('🚀 ~ file: test.js ~ line 53 ~ onTicketPrintError ~ err', err);
};

const printReady = () => {
  // 发送给打印机的订单数据
  const orderList = [
    // {
    //   orderId: '',
    //   svgList: [{
    //        svg: '',
    //       cut: true, // false
    //     }],
    // },
  ];
  const ticketList = [];
  const orderMap = {};
  for (
    let orderIndex = 0;
    orderIndex < orderTicketIDs.length;
    orderIndex += 1
  ) {
    const ticket = orderTicketIDs[orderIndex];
    if (toString.call(ticket) !== '[object Object]') return;
    const { layoutId, tranNumber } = ticket;
    const layoutInfo = layoutTemplates[layoutId];
    const { ticketLayoutSvg } = layoutInfo || {};
    // console.log(ticketToPrint, 'ticketToPrint')
    // console.log(layoutInfo, 'layoutInfo')
    try {
      if (!ticketLayoutSvg) throw Error('票数据中SVG为空😳');
      const target = {
        ...ticket,
        svg: ticketLayoutSvg,
        cut: true,
      };
      if (orderMap[tranNumber]) {
        orderMap[tranNumber].push(target);
      } else {
        orderMap[tranNumber] = [target];
      }
    } catch (error) {
      // eslint-disable-next-line consistent-return
      return onTicketPrintError({
        taskData: { data: ticket },
        resultData: `svg动态字段设置出错: ${error.message}`,
      });
    }
  }

  Object.keys(orderMap).forEach(orderId => {
    orderList.push({
      orderId,
      svgList: orderMap[orderId],
    });
  });
  console.log('orderList', orderList);
  // 动态字段设置完成后打印
  try {
    if (orderList.length > 0) {
      printTicket(orderList);
    }
  } catch (error) {
    console.error('printSocket error: ', error);
  }
};

printReady();
