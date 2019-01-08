
    export const threeData = {
        // backgroundColor: '#FBFBFB',
        title: {
            text: '专利申请量',
            textStyle:{
                color:"#10b5ff",
                fontWeight:'normal'
            },
            padding:[15, 0, 0, 40 ]
        },
        tooltip : {
            trigger: 'axis'
        },
        
        legend: {
            
        },
    
        calculable : true,
    
    
        xAxis : [
            {
                axisLabel:{
                    rotate: 0,
                    interval:0
                },
                axisLine:{
                  lineStyle :{
                      color: '#CECECE'
                  }
                },
                type : 'category',
                boundaryGap : false,
                data: ["2013","2014","2015","2016","2017"],
                
            }
        ],
        yAxis : [
            {
    
                type : 'value',
                axisLine:{
                    lineStyle :{
                        color: '#CECECE'
                    }
                }
            }
        ],
        series : [
            
            {
                name:'',
                type:'line',
                symbol:'none',
                smooth: 0.2,
                color:['#66AEDE'],
                data:[4740, 4650, 5281, 7266, 8511]
            }
        ]
    }
