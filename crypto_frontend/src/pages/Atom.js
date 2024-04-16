import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Atom = () => {
    const [highlightedDiv, setHighlightedDiv] = useState(1); // State to track which div is highlighted

    const handleClick = (divNumber) => {
        if (divNumber === 1) {
            fetchData('1D', 'closeMarket'); // Fetch 1 day data with close market data
        } else if (divNumber === 2) {
            fetchData('1D', 'volume'); // Fetch 1 day data with volume data
        }
        setHighlightedDiv(divNumber); // Update the state with the clicked div number
    };
    

    const [state, setState] = useState({
        series: [],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime'
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      });

      const fetchData = (timeRange, dataType) => {
         
        let apiUrl = `https://crypto.ranqinxz.de/api/all_cyrpto`;
        if (timeRange === '1D') {
          apiUrl = `https://crypto.ranqinxz.de/api/cyrpto_1_days`; // URL for 1 day data
        } else if (timeRange === '7D') {
          apiUrl = `https://crypto.ranqinxz.de/api/cyrpto_7_days`; // URL for 7 days data
        } else if (timeRange === '1M') {
          apiUrl = `https://crypto.ranqinxz.de/api/all_cyrpto`; // URL for 1 month data
        } else if (timeRange === '1Y') {
          apiUrl = `https://crypto.ranqinxz.de/api/cyrpto_1_year`; // URL for 1 year data
        }
    
        axios.get(apiUrl)
          .then(response => {
            const cryptoData = response.data;
    
            // Group data by symbol
            const groupedData = {};
            cryptoData.forEach(data => {
              if (!groupedData[data.symbol]) {
                groupedData[data.symbol] = [];
              }
              let value;
                if (dataType === 'volume') {
                    value = parseFloat(data.volume).toFixed(2);
                } else {
                    value = parseFloat(data.close_market);
                }
              groupedData[data.symbol].push({
                x: new Date(data.datetime).getTime(), // Convert datetime to timestamp
                y: value  // Parse open_market to float
              });
            });
    
            // Convert grouped data to series format
            const seriesData = Object.keys(groupedData).map(symbol => ({
              name: symbol,
              data: groupedData[symbol]
            }));
    
            setState(prevState => ({
              ...prevState,
              series: seriesData
            }));
          })
          .catch(error => {
            console.error('Error fetching crypto data:', error);
          });
      };
    
      useEffect(() => {
        fetchData('1M', 'closeMarket'); // Fetch data for 1 month initially
      }, []);
    return (
        <div>

            <div  className="d-flex flex-column flex-root app-root" id="kt_app_root">

                <div  className="app-page  flex-column flex-column-fluid " id="kt_app_page">


                    <div className="app-main flex-column flex-row-fluid " id="kt_app_main">

                        <div className="d-flex flex-column flex-column-fluid">


                            <div id="kt_app_toolbar" className="app-toolbar  py-3 py-lg-6 ">


                                <div id="kt_app_toolbar_container" className="app-container  container-xxl d-flex flex-stack ">





                                    <div className="d-flex align-items-center gap-2 gap-lg-3">


                                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-1 flex-column justify-content-center my-0">
                                            Atom
                                        </h1>

                                        

                                    </div>

                                </div>

                            </div>

                            <div id="kt_app_content" className="app-content  flex-column-fluid ">



                                <div id="kt_app_content_container" className="app-container  container-xxl ">

                                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">

                                        <div className="col-xxl-12">

                                            <div className="row g-5 g-xl-10">

                                                <div className="col-md-3" onClick={() => handleClick(1)}>

                                                    <div className={`card card-flush h-xl-100 ${highlightedDiv === 1 ? 'highlighted' : ''}`}  style={{backgroundColor: '#dba5d3'}}>

                                                        <div className="card-header flex-nowrap pt-5">

                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label fw-bold fs-4 text-gray-800">Atom Price</span>
                                                                <span className="mt-1 fw-semibold fs-7"  >111,035 USD for 1 Atom</span>
                                                            </h3>

                                                            <div className="card-toolbar">

                                                                <button className="btn btn-icon justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true"  >

                                                                    <i className="ki-duotone ki-dots-square fs-1"><i className="bi bi-info-circle-fill" data-tooltip-id="my-tooltip-inline" data-tooltip-content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."></i></i>
                                                                </button>
                                                                <ReactTooltip id="my-tooltip-inline" style={{ width: "200px", zIndex: "100000" }} />

                                                                
                                                            </div>

                                                        </div>

                                                        <div className="card-body text-center pt-5">

                                                            <img src="assets/media/svg/shapes/atom.png" className="h-125px mb-5" alt="" />

                                                            <div className="text-start">
                                                                <span className="d-block fw-bold fs-1 text-gray-800">30.33460000 </span>
                                                                <span className="mt-1 fw-semibold fs-3"  >5,999,00 USD</span>
                                                            </div>

                                                        </div>

                                                    </div>



                                                </div>

                                                <div className="col-md-3" onClick={() => handleClick(2)}>

                                                    <div className={`card card-flush h-xl-100 ${highlightedDiv === 2 ? 'highlighted' : ''}`} style={{backgroundColor: '#83c975'}}>

                                                        <div className="card-header flex-nowrap pt-5">

                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label fw-bold fs-4 text-gray-800">Volume</span>
                                                                <span className="mt-1 fw-semibold fs-7"  >1.33,045 USD for 1 Atom</span>
                                                            </h3>

                                                            <div className="card-toolbar">

                                                                <button className="btn btn-icon justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true"  >

                                                                    <i className="ki-duotone ki-dots-square fs-1"><i className="bi bi-info-circle-fill" data-tooltip-id="my-tooltip-inline" data-tooltip-content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."></i></i>
                                                                </button>

                                                                <ReactTooltip id="my-tooltip-inline" style={{ width: "200px", zIndex: "100000" }} />
                                                            

                                                            </div>

                                                        </div>


                                                        <div className="card-body text-center pt-5">

                                                            <img src="assets/media/svg/shapes/atom.png" className="h-125px mb-5" alt="" />



                                                            <div className="text-start">
                                                                <span className="d-block fw-bold fs-1 text-gray-800">4703.7589 </span>
                                                                <span className="mt-1 fw-semibold fs-3"  >777,005,56 USD</span>
                                                            </div>

                                                        </div>

                                                    </div>



                                                </div>

                                                <div className="col-md-3">

                                                    <div className="card card-flush h-xl-100" style={{ backgroundColor: '#ffe6be' }}>

                                                        <div className="card-header flex-nowrap pt-5">

                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label fw-bold fs-4 text-gray-800">Market Cap</span>
                                                                <span className="mt-1 fw-semibold fs-7"  >88,668 USD for 1 Atom</span>
                                                            </h3>

                                                            <div className="card-toolbar">

                                                                <button className="btn btn-icon justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true"  >

                                                                    <i className="ki-duotone ki-dots-square fs-1"><i className="bi bi-info-circle-fill" data-tooltip-id="my-tooltip-inline" data-tooltip-content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."></i></i>
                                                                </button>
                                                                <ReactTooltip id="my-tooltip-inline" style={{ width: "200px", zIndex: "100000" }}/>

                                                                

                                                            </div>

                                                        </div>

                                                        <div className="card-body text-center pt-5">

                                                            <img src="assets/media/svg/shapes/atom.png" className="h-125px mb-5" alt="" />

                                                            <div className="text-start">
                                                                <span className="d-block fw-bold fs-1 text-gray-800">0.44554576</span>
                                                                <span className="mt-1 fw-semibold fs-3"  >79,335,45 USD</span>
                                                            </div>

                                                        </div>

                                                    </div>



                                                </div>

                                                <div className="col-md-3">

                                                    <div className="card card-flush h-xl-100" style={{backgroundColor: '#80ccd9'}}>

                                                        <div className="card-header flex-nowrap pt-5">

                                                            <h3 className="card-title align-items-start flex-column">
                                                                <span className="card-label fw-bold fs-4 text-gray-800">Inflation</span>
                                                                <span className="mt-1 fw-semibold fs-7"  >5.12,045 USD for 1 Atom</span>
                                                            </h3>

                                                            <div className="card-toolbar">

                                                                <button className="btn btn-icon justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true"  >

                                                                    <i className="ki-duotone ki-dots-square fs-1"><i className="bi bi-info-circle-fill" data-tooltip-id="my-tooltip-inline" data-tooltip-content="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."></i></i>
                                                                </button>

                                                                <ReactTooltip id="my-tooltip-inline" style={{ width: "200px", zIndex: "100000" }} />
                                                            

                                                            </div>

                                                        </div>


                                                        <div className="card-body text-center pt-5">

                                                            <img src="assets/media/svg/shapes/atom.png" className="h-125px mb-5" alt="" />



                                                            <div className="text-start">
                                                                <span className="d-block fw-bold fs-1 text-gray-800">4703.7589 </span>
                                                                <span className="mt-1 fw-semibold fs-3"  >989,005,56 USD</span>
                                                            </div>

                                                        </div>

                                                    </div>



                                                </div>

                                            </div>

                                        </div>

                                    

                                    </div>

                                
                                <div  className="row g-5 g-xl-10 mb-5 mb-xl-10">
                                
                                    <div  className="col-xxl-12">

                                    
                                        <div  className="card card-flush overflow-hidden h-xl-100">
                                        
                                            <div  className="card-header pt-7 mb-2">
                                                
                                                <h3  className="card-title text-gray-800 fw-bold">Transaction History</h3>
                                                

                                                
                                                <div  className="card-toolbar">
                                                    <ul className="nav" id="kt_chart_widget_1_tabs">
                                                        <li className="nav-item">
                                                        <button className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_1_week_toggle" href="#kt_chart_widget_1_week_tab" onClick={() => fetchData('1D', `${highlightedDiv === 1 ? 'closeMarket' : 'volume'}`)}>1D</button>
                                                        </li>
                                                        <li className="nav-item">
                                                        <button className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"  data-bs-toggle="tab" id="kt_chart_widget_2_month_toggle" href="#kt_chart_widget_2_month_tab" onClick={() => fetchData('7D', `${highlightedDiv === 1 ? 'closeMarket' : 'volume'}`)}>7D</button>
                                                        </li>
                                                        <li className="nav-item">
                                                        <button className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active"  data-bs-toggle="tab" id="kt_chart_widget_3_month_toggle" href="#kt_chart_widget_3_month_tab" onClick={() => fetchData('1M', `${highlightedDiv === 1 ? 'closeMarket' : 'volume'}`)}>1M</button>
                                                        </li>
                                                        <li className="nav-item">
                                                        <button className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"  data-bs-toggle="tab" id="kt_chart_widget_4_month_toggle" href="#kt_chart_widget_4_month_tab" onClick={() => fetchData('1Y', `${highlightedDiv === 1 ? 'closeMarket' : 'volume'}`)}>1Y</button>
                                                        </li>
                                                    </ul>
                                                                                            
                                                </div>
                                                
                                            </div>
                                        

                                            
                                            <div  className="card-body d-flex justify-content-between flex-column pt-0 pb-1 px-0">
                                                
                                                <div  className="px-9 mb-5">
                                                
                                                    
                                                    

                                                    
                                                    {/* <span  className="fs-6 fw-semibold text-gray-500">Transactions in April</span> */}
                                                    
                                                </div>
                                                

                                                <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                                                <div id="kt_charts_widget_26"  className="min-h-auto ps-4 pe-6" data-kt-chart-info="Transactions"  ></div>
                                                
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                    
                                    
                                    
                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-5 text-left">
                                            <div className="fs-2 text-gray-900 fw-bold text-hover-primary text-gray-900 lh-base">
                                            Atom Description 
                                            </div> 
                                            <div className="fw-semibold fs-5 text-gray-600 text-gray-900 mt-4">    
                                                 What is Atom?<br/>
                                                 Atom is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity. As the first blockchain to feature smart contracts, it has the largest ecosystem of decentralized applications, ranging from decentralized exchanges to crypto lending and borrowing platforms and more.<br/> 

                                                 Atom is also home to numerous Layer 2 solutions that offer users a cheaper and faster way to process transactions on the blockchain. Some of these solutions include Arbitrum, which rolls up multiple transactions into a single transaction on Ethereum, and Polygon’s Proof-of-Stake chain, which is a sidechain that runs parallel to the Ethereum blockchain. <br/>
                                                What Makes Atom Unique?<br/>
                                                Atom allows for the creation of ERC-20 tokens, which can be used as native tokens for the applications that live on the Ethereum blockchain. These tokens can be used for governance on their respective applications, for utility purposes such as paying trading fees, or as stores of value, as in the case of stablecoins like USDT and USDC. However, gas fees for transactions are still paid in ETH, as transactions are still recorded on the Ethereum blockchain.<br/>
                                                History of Binance<br/>
                                                The Atom project was initially conceived when Vitalik Buterin published the whitepaper in 2013. The yellowpaper, which consists of more technical details on how Ethereum would work, was later published by Gavin Wood in 2014. A fundraising sale was conducted in September 2014 and the network went live in July 2015. On 15 September 2022, Ethereum transitioned from Proof-of-Work to Proof-of-Stake consensus with the Merge. 
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            

                                    



                                    

                                </div>

                            </div>

                        </div>





                    </div>

                </div>
            </div>
        </div>
    );
}

export default Atom;