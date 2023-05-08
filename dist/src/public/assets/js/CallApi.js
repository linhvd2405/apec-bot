

 // gọi API từ BE của mình

 var myHeaders = new Headers();
 myHeaders.append("accept", "application/json");
 myHeaders.append("x-custom-lang", "en");
 myHeaders.append("user-agent", "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion");

 var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 
// Lấy _id từ URL
const pathname = window.location.pathname;
const _id = pathname.split("/").pop();
console.log(_id);

async function fetchData(){
  try {

    const response = await fetch(`http://localhost:3000/api/v1/admin/stock/${_id}`, requestOptions);
    const result = await response.json();
          // console.log({ result })
          const stockCode = result?.data?.data?.stockCode;
          const infoLine1Item1 = document.querySelector('.info-line1_item1')
          infoLine1Item1.innerHTML = stockCode;
    
          const nameCompany = result?.data?.data?.nameCompany;
          const infoLine1Item2 = document.querySelector('.info-line1_item2')
          infoLine1Item2.innerHTML = nameCompany;
    
          const exchangeCode = result.data?.data.exchangeCode;
          const infoLine1Item3 = document.querySelector('.info-line1_item3')
          infoLine1Item3.innerHTML = exchangeCode;
    
          const rating = result.data?.data.rating;
          const infoLine1Item4 = document.querySelector('.info-line1_item4')
          infoLine1Item4.innerHTML = rating;
     
          const industry = result.data?.data.industry;
          const infoLine2Item1 = document.querySelector('.info-line2_item1')
          infoLine2Item1.innerHTML = industry;
    
          const trandingDate = result.data?.data.trandingDate;
          const infoLine2Item2 = document.querySelector('.info-line2_item2')
          infoLine2Item2.innerHTML = trandingDate;
    
          const liquidity = result.data?.data.liquidity;
          const dataCol1 = document.querySelector('.data-col-1')
          dataCol1.innerHTML = liquidity;
    
          const refPrice  = result.data?.data.refPrice;
          const dataCol3 = document.querySelector('.data-col-3')
          dataCol3.innerHTML = refPrice;
    
          const targetPrice  = result.data?.data.targetPrice;
          const dataCol4 = document.querySelector('.data-col-4')
          dataCol4.innerHTML = targetPrice;
    
          const cutlossPrice  = result.data?.data.cutlossPrice;
          const dataCol5 = document.querySelector('.data-col-5')
          dataCol5.innerHTML = cutlossPrice;
    
          const shortTrend  = result.data?.data.shortTrend;
          const dataCol6 = document.querySelector('.data-col-6')
          dataCol6.innerHTML = shortTrend;
    
          const overview  = result.data?.data.overview;
          const contentCompanyIntro = document.querySelector('.content-companyIntro')
          contentCompanyIntro.innerHTML = overview;
    
          const marketCapital  = result.data?.data.marketCapital;
          const synthesisItem1Data = document.querySelector('.synthesis-item_1-data')
          synthesisItem1Data.innerHTML = marketCapital + '    tỷ';
    
          const outstandingShares  = result.data?.data.outstandingShares;
          const synthesisItem2Data = document.querySelector('.synthesis-item_2-data')
          synthesisItem2Data.innerHTML = outstandingShares;
    
          const sumVol10d  = result.data?.data.sumVol10d;
          const synthesisItem3Data = document.querySelector('.synthesis-item_3-data')
          synthesisItem3Data.innerHTML = sumVol10d;
    
          const eps  = result.data?.data.eps;
          const synthesisItem4Data = document.querySelector('.synthesis-item_4-data')
          synthesisItem4Data.innerHTML = eps;
    
          const pe = result.data?.data.pe;
          const synthesisItem5Data = document.querySelector('.synthesis-item_5-data')
          synthesisItem5Data.innerHTML = pe;
    
          const roe = result.data?.data.roe;
          const synthesisItem6Data = document.querySelector('.synthesis-item_6-data')
          synthesisItem6Data.innerHTML = roe;
    
          const de = result.data?.data.de;
          const synthesisItem7Data = document.querySelector('.synthesis-item_7-data')
          synthesisItem7Data.innerHTML = de;

          const rating2 = result.data?.data.rating;
          const signalItem3Data = document.querySelector('.signal-item_3-data')
          signalItem3Data.innerHTML = rating2;
    
          const adx = result.data?.data.adx;
          const signalItem4Data = document.querySelector('.signal-item_4-data')
          signalItem4Data.innerHTML = adx;
    
          const rsi = result.data?.data.rsi;
          const signalItem5Data = document.querySelector('.signal-item_5-data')
          signalItem5Data.innerHTML = rsi;
    
          const macd = result.data?.data.macd;
          const signalItem6Data = document.querySelector('.signal-item_6-data')
          signalItem6Data.innerHTML = macd;
          
        /// phần các mã cổ phiếu cùng ngành
        const stockCodes = result?.data.data.stockCodes;
        const codesItems = document.querySelectorAll('.codes-item');
        console.log(stockCodes)
        stockCodes.forEach((code, index) => {
          console.log(code)
          const stockCode = code?.stockCode;
          const rating = code?.rating;
    
          const codesItem = codesItems[index];
          const codesItemCode = codesItem.querySelector('.codes-item_' + (index + 1));
          const codesItemRating = codesItem.querySelector('.codes-item_' + (index + 1) + '-data');
          
          codesItemCode.innerHTML = stockCode;
          codesItemRating.innerHTML = rating;
    
    
          // phần biểu đồ 
          const netRevData = result?.data?.data?.netRev || [];
          const netIncData = result?.data?.data?.netInc || [];
          const debtData = result?.data?.data?.debt || [];
          const loanData = result?.data?.data?.loan || [];
          const cfiData = result?.data?.data?.cfi || [];
          const cfoData = result?.data?.data?.cfo || [];
          const cffData = result?.data?.data?.cff || [];
          const reportDateData = result?.data?.data?.reportDate || [];
    
    
        // doanh thu
                    
        // document.addEventListener("DOMContentLoaded", function() {
            var ctx1 = document.getElementById("chart_rev").getContext("2d");
            var myChart1 = new Chart(ctx1, {
              type: "line",
              data: {
                labels: reportDateData,
                datasets: [
                  {
                    label : 'Sự tăng trưởng',
                    data: netRevData,
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(255, 153, 0)',
                    borderWidth: 2,
                    pointRadius: 2,
                    fill: false,
                    lineTension: 0.6,
                    stack: 'combined',
                    yAxisID: 'Y1', // đặt ID cho trục y đầu tiên
                  },
                  {
                    type: 'bar',
                    label: 'Doanh thu (tỷ)',
                    data: netRevData,
                    backgroundColor: [
                      'rgb(3 88 133)',
                      'rgb(3 88 133)',
                      'rgb(3 88 133)',
                      'rgb(3 88 133)'
                    ], 
                    yAxisID: 'Y2', // đặt ID cho trục y thứ hai
                    pointStyle:'rect',
                    label: 'Doanh thu (tỷ)',
                    barPercentage: 0.5, // Tinh chỉnh chiều rộng của các cột
                    categoryPercentage: 0.8 ,// Tinh chỉnh khoảng cách giữa các cột
                    stack: 'combined',
                  }
                ]
              },
              options: {
                plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
                scales: {
                  Y1: 
                    {
                      type: 'linear',
                      position: 'left',
                      display: true,
                      ticks: {
                        beginAtZero: true
                      }
                    },
                    Y2:
                    {
                      type: 'linear',
                      position: 'right',
                      display: true,
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  
                }
              }
              
            });
          // });
          
    
    
        // lợi nhuận
        // document.addEventListener("DOMContentLoaded", function() {
            var ctx2 = document.getElementById("chart_profit").getContext("2d");
            var myChart2 = new Chart(ctx2, {
              type: "line",
              data: {
                labels: reportDateData,
                datasets: [
                  {
                    label: "Sự tăng trưởng",
                    data: netIncData,
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(255, 153, 0)',
                    borderWidth: 2,
                    pointRadius: 2,
                    fill: false,
                    lineTension: 0.5,
                    yAxisID: 'Y1', // đặt ID cho trục y đầu tiên
                  },
                  {
                    type: 'bar',
                    label: 'Lợi nhuận (tỷ)',
                        data: netIncData,
                        backgroundColor: [
                            '#ac2e23',
                            '#ac2e23',
                            '#ac2e23',
                            '#ac2e23'
                        ], 
                    yAxisID: 'Y2', // đặt ID cho trục y thứ hai
                    pointStyle:'rect',
                    barPercentage: 0.5, // Tinh chỉnh chiều rộng của các cột
                    categoryPercentage: 0.8, // Tinh chỉnh khoảng cách giữa các cột
                  }
                ]
              },
              options: {
                plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
                scales: {
                  Y1: 
                    {
                      type: 'linear',
                      position: 'left',
                      ticks: {
                        beginAtZero: true
                      },
                      gridLines: {
                        display: false
                      }
                    },
                    Y2:{
                      type: 'linear',
                      position: 'right',
                      ticks: {
                        beginAtZero: true
                      },
                      gridLines: {
                        display: false
                      }
                    },
                  
                }
              }
            });
          // });
    
    
          // cấu trúc tài sản
    
    
          // document.addEventListener("DOMContentLoaded", function() {
            var ctx3 = document.getElementById("chart_asset").getContext("2d");
            var myChart3 = new Chart(ctx3, {
              type: "line",
              data: {
                labels: reportDateData,
                datasets: [
                  {
                    label : 'Nợ/VCSH',
                    data: debtData,
                    backgroundColor: 'transparent',
                    borderColor: '#00c6bb',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointStyle: 'square',
                    pointBackgroundColor: '#00c6bb',
                    fill: false,
                    lineTension: 0.1,
                    pointStyle:'rect',
                    yAxisID: 'y-axis-1', // đặt ID cho trục y đầu tiên
                  },
                  {
                    label : '(Vay NH+DH)/VCSH',
                    data: loanData,
                    backgroundColor: 'transparent',
                    borderColor: '#ffb7a2',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffb7a2',
                    fill: false,
                    lineTension: 0.1,
                    yAxisID: 'y-axis-1', // đặt ID cho trục y đầu tiên
                  }
                ]
              },
              options: {
                plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
                scales: {
                  yAxes: [
                    {
                      id: 'y-axis-1', // đặt ID cho trục y đầu tiên
                      type: 'linear',
                      position: 'left',
                      ticks: {
                        beginAtZero: true
                      },
                      gridLines: {
                        display: false
                      }
                    }
                  ]
                }
              }
            });
          // });
    
          // lưu chuyển tiền tệ
          // document.addEventListener("DOMContentLoaded", function() {
            var ctx4 = document.getElementById("chart_currency").getContext("2d");
            var myChart4 = new Chart(ctx4, {
                type: "bar",
            data: {
              labels: reportDateData,
              datasets: [
                {
                  label: "CFO",
                  data: cfoData,
                  backgroundColor: "#0161a6",
                  stack : 1,
                  barPercentage: 0.5, // Tinh chỉnh chiều rộng của các cột
                  categoryPercentage: 0.8, // Tinh chỉnh khoảng cách giữa các cột
                  pointStyle:'rect',
                },
                {
                  label: "CFI",
                  data: cfiData,
                  backgroundColor: "#ffe1ca",
                  stack: 1,
                  barPercentage: 0.5, // Tinh chỉnh chiều rộng của các cột
                  categoryPercentage: 0.8, // Tinh chỉnh khoảng cách giữa các cột
                  pointStyle:'rect',
                },
                {
                  label: "CFF",
                  data: cffData,
                  backgroundColor: "#ff959c",
                  stack: 1,
                  barPercentage: 0.5, // Tinh chỉnh chiều rộng của các cột
                  categoryPercentage: 0.8, // Tinh chỉnh khoảng cách giữa các cột
                  pointStyle:'rect',
                }
              ]
            },
            options: {
                plugins: {
                    legend: {
                      labels: {
                        usePointStyle: true,
                      }
                    }
                  },
              scales: {
                xAxes: [{
                  stacked: true
                }],
                yAxes: [{
                  stacked: true
                }]
              }
            }
          });
        });
  } catch(error){
    console.log(error);
  }
}
fetchData();
  // })
    // });
