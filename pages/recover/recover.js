
//这两行写在page({})外面
const app = getApp()
var util = require("../../utils/util.js")
// pages/demo05/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //班组单选框
    shiftTeam: [
      { id: '1', value: 'A' },
      { id: '2', value: 'B' }
    ],
    //当前选中数组的下标值
    customIndex: [0, 0, 0, 0],
    //当前选中数组
    onlyArray: [
      [],
      [],
      [],
      []
    ],
    //customArray假设为我们从后台获取到的json数据
    customArray: [
      //2.1侧围
      {
        name: '2.1侧围',
        dept: [
          {
            name: '侧围内板',
            product: [
              { name: 'AFO3500', num: [{ name: 'AMV167S30' }, ] },
              { name: 'AFO3510', num: [{ name: 'AMV167S30' }, ] },
              { name: '3560R01', num: [{ name: 'AMV160500001' }, ] },
              { name: '3570R01', num: [{ name: 'AMV160500001' }, ] },
              { name: 'AFO3600', num: [{ name: 'AMV167S30001' }, ] },
              { name: 'AFO3610', num: [{ name: 'AMV167S30001' }, ] },
              { name: 'AFO3620R01', num: [{ name: 'AMV167S30' }, ] },
              { name: 'AFO3630R01', num: [{ name: 'AMV167S30' }, ] },
             ]
          },
          {
            name: '侧围内板后部',
            product: [
              { name: 'AFO3300', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO3310', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO3345', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO3355', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO3360', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO3370', num: [{ name: 'AMV167S30' }, ] }, 
            ]
          },
          {
            name: '侧围外板',
            product: [
              { name: 'AFO4280', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO4290', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO4451', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO4470', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
        ]
      },
      //2.1底板分拼
      {
        name: '2.1底板分拼',
        dept: [
          {
            name: '后底板',
            product: [
              { name: 'AFO1780R01', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'AFO1780R02', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO1790', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1840R01', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFO1840R02', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO1865', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: '前底板',
            product: [
              { name: 'AFO1300', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1320', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AFO1322', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1350R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO1360R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO1415R01', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AFO1425R01', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1442', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1445', num: [{ name: 'AKD465F0101' }, ] }, 
            ]
          },
          {
            name: '水箱',
            product: [
              { name: 'AFO2520R01', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AFO2580R01', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AFO2640', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO2690', num: [{ name: 'AKD465F0101' }, ] }, 
            ]
          },
          {
            name: '纵梁',
            product: [
              { name: 'AFO1140', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFO1150', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
        ]
      },
      //2.1底板主线
      {
        name: '2.1底板主线',
        dept: [
          {
            name: 'Geo1',
            product: [
              { name: 'AFO2004R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO2008R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO2012R01', num: [{ name: 'AKD465F0101' }, ] }, 
            ]
          },
          {
            name: 'Geo2',
            product: [
              { name: 'AF03023R01KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AF03031R01KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AF03032R01KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AF03073R01KL1', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'AF03073R01KL2', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AF03074R01KL1', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'AF03074R01KL2', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AF03081R01KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AF03082R01KL1', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: 'UB1.1',
            product: [
              { name: 'AFO2040', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AF02050R03', num: [{ name: 'AMV167S3101' }, ] }, 
            ]
          },
          {
            name: 'UB1.2',
            product: [{ name: 'AF02110R03', num: [{ name: 'AMV167S30002' }, ] }, ]
          },
          {
            name: 'UB2.1',
            product: [{ name: 'AF03160R04', num: [{ name: 'AKD465F0101' }, ] }, ]
          },
          {
            name: 'UB2.2',
            product: [
              { name: 'AF03210R01', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AF03210R02', num: [{ name: 'AKD465F0101' }, ] }, 
              { name: 'AF03210R03', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AF03210R04', num: [{ name: 'AMV167S30002' }, ] }, 
               ] }, 
            ]
      },
      //2.1门盖
      {
        name: '2.1门盖',
        dept: [
          {
            name: '后盖',
            product: [
              { name: 'AFO7218R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFO7220R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFO7270R01', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFO7275', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFO7300R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFOX220R01', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFOX240', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFOX260R01', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOX310R01KL1', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFOX310R01KL2', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '前盖',
            product: [
              { name: 'AFO7005R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFO7010R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFO7060R01', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFO7080R01', num: [{ name: 'AMV153W24' }, ] }, 
            ]
          },
          {
            name: '翼子板',
            product: [
              { name: 'AFO7500', num: [{ name: 'AKL450F4001' }, ] }, 
              { name: 'AFOX500', num: [{ name: 'AKL450F4002' }, ] }, 
            ]
          },
          {
            name: '右后门',
            product: [
              { name: 'AFO6505', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6560R01', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6570R01', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6680R01', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFO6740R01', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '右前门',
            product: [
              { name: 'AFO6005', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6020', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6065', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6180R01', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFO6240R01', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '左后门',
            product: [
              { name: 'AFO6515', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6565', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6575', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6690R01', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFO6750R01', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '左前门',
            product: [
              { name: 'AFO6015', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6030R01', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6075', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFO6190R01', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFO6250R01', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
        ]
      },
      //2.1总拼
      {
        name: '2.1总拼',
        dept: [
          {
            name: '总拼1',
            product: [
              { name: 'AFO5210R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5210R02', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5210R05', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO5210R06', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO5210R07', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO5210R08', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFO5220R03', num: [{ name: 'AMV167S30002' }, ] }, 
            ]
          },
          {
            name: '总拼2',
            product: [
              { name: 'AFO5310R01KL1', num: [{ name: 'AKL450F4001' }, ] }, 
              { name: 'AFO5310R01KL2', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5310R02KL1', num: [{ name: 'AKL450F4001' }, ] }, 
              { name: 'AFO5310R02KL2', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5320R05', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5320R06', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5320R07', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5320R08', num: [{ name: 'AMV167S30' }, ] }, 
            ]
          },
          {
            name: '总拼3',
            product: [
              { name: 'AFO5410R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5410R02', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5410R03', num: [{ name: 'AKL450F40（低）' }, ] }, 
            ]
          },
          {
            name: '总拼4',
            product: [
              { name: 'AFO5510R06', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5550R01', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFO5550R04', num: [{ name: 'AMV160500' }, ] }, 
            ]
          },
        ]
      },
      //2.2侧围
      {
        name: '2.2侧围',
        dept: [
          {
            name: '侧围内板',
            product: [
              { name: 'AFOJ500', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOJ510', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOJ560', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOJ570', num: [{ name: 'AMV167S30002' }, ] }, 
            ]
          },
          {
            name: '侧围内板后部',
            product: [
              { name: 'AFOJ385', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFOJ395', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFOJ740', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: '侧围外板',
            product: [
              { name: 'AFON260', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFON270', num: [{ name: 'AMV167S30002' }, ] }, 
            ]
          },
        ]
      },
      //2.2底板分拼
      {
        name: '2.2底板分拼',
        dept: [
          {
            name: '后底板',
            product: [
              { name: 'AFOA750', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'A810R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'A810R02', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'AFOA840', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: '前底板',
            product: [
              { name: 'AFOA300', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'A320R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'A370R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'A395R01', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: '前纵梁',
            product: [
              { name: 'AFOA090', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFOA100', num: [{ name: 'AMV167S30002' }, ] }, 
            ]
          },
          {
            name: '水箱',
            product: [
              { name: 'AFOE450', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'E490R01', num: [{ name: 'AKD465F01' }, ] }, 
              { name: 'E510R01', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'E520R01', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'E590R01', num: [{ name: 'AKD465F01' }, ] }, 
            ]
          },
        ]
      },
      //2.2底板主线
      {
        name: '2.2底板主线',
        dept: [
          {
            name: 'Geo1',
            product: [
              { name: 'AFOE002KL1', num: [{ name: 'AKD465F0102' }, ] }, 
              { name: 'AFOJ002R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOJ006R01', num: [{ name: 'AMV167S30' }, ] }, 
            ]
          },
          {
            name: 'Geo2',
            product: [
              { name: 'AFOJ018R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOJ019R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOJ022R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOJ040R01', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFOJ052R01', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFOJ063R01KL1', num: [{ name: 'AKD465F01' }, ] }, 
              { name: 'AFOJ063R01KL2', num: [{ name: 'AMV167S30001' }, ] }, 
              { name: 'AFOJ064R01KL1', num: [{ name: 'AKD465F01' }, ] }, 
              { name: 'AFOJ064R01KL2', num: [{ name: 'AMV167S30001' }, ] }, 
            ]
          },
          {
            name: 'UB1.1',
            product: [{ name: 'AFOE044R01', num: [{ name: 'AMV167S30001' }, ] }, ]
          },
        ]
      },
      //2.2总拼
      {
        name: '2.2总拼',
        dept: [
          {
            name: 'PSD',
            product: [
              { name: 'AFO5120R01', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFO5165R01', num: [{ name: 'AKL450F40（高）' },{ name: 'AKL450F40（低）' }, ] }, 
              { name: 'AFO5165R02', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS160KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS160KL2', num: [{ name: 'AKL450F15' }, ] }, 
              { name: 'AFOZ115R01', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOZ185R01KL1', num: [{ name: 'AKL450F40（高）' },{ name: 'AKL450F40（低）' }, ] }, 
              { name: 'AFOZ185R01KL2', num: [{ name: 'AMV167S30002' }, ] }, 
            ]
          },
          {
            name: '总拼1',
            product: [
              { name: 'AFOS210R03', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS210R04', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS210R05', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS210R06', num: [{ name: 'AMV167S30' }, ] }, 
            ]
          },
          {
            name: '总拼2',
            product: [
              { name: 'AFOS320R01KL1', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFOS320R01KL2', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS320R02KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS320R02KL2', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFOS320R05KL1', num: [{ name: 'AMV153W2402' }, ] }, 
              { name: 'AFOS320R05KL2', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS320R06KL1', num: [{ name: 'AMV153W2402' }, ] }, 
              { name: 'AFOS320R06KL2', num: [{ name: 'AMV167S30' }, ] }, 
            ]
          },
          {
            name: '总拼3',
            product: [
              { name: 'AFOS410RO7', num: [{ name: 'AMV167S30002' }, ] }, 
              { name: 'AFOS430R01KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS430R01KL2', num: [{ name: 'AKL450F15' }, ] }, 
              { name: 'AFOS430R02KL1', num: [{ name: 'AMV167S30' }, ] }, 
              { name: 'AFOS430R02KL2', num: [{ name: 'AKL450F15' }, ] }, 
            ]
          },
          {
            name: '总拼4',
            product: [
              { name: 'AFOS550R01', num: [{ name: 'AMV160500' }, ] }, 
              { name: 'AFOS550R02', num: [{ name: 'AMV160500' }, ] }, 
            ]
          },
        ]
      },
      //2.2门盖
      {
        name: '2.2门盖',
        dept: [
          {
            name: '后盖',
            product: [
              { name: 'AFOW230', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOW240', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFOW310KL1', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOW310KL2', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFOW350', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFOW360KL1', num: [{ name: 'AMV153W24' }, ] }, 
              { name: 'AFOW360KL2', num: [{ name: 'AMV167S3101' }, ] }, 
            ]
          },
          {
            name: '前盖',
            product: [
              { name: 'AFOW010', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOW060', num: [{ name: 'AMV167S31' }, ] }, 
              { name: 'AFOW080', num: [{ name: 'AMV153W24' }, ] }, 
            ]
          },
          {
            name: '翼子板',
            product: [
              { name: 'W510R01', num: [{ name: 'AKL450F4001' }, ] }, 
            ]
          },
          {
            name: '右后门',
            product: [
              { name: 'AFOT540', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT820', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFOT880', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '右前门',
            product: [
              { name: 'AFOT005', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT040', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT320', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFOT380', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '左后门',
            product: [
              { name: 'AFOT550', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT830', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFOT890', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
          {
            name: '左前门',
            product: [
              { name: 'AFOT015', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT050', num: [{ name: 'AMV167S3101' }, ] }, 
              { name: 'AFOT330', num: [{ name: 'AKL450F40（高）' }, ] }, 
              { name: 'AFOT390', num: [{ name: 'AMV167S31' }, ] }, 
            ]
          },
        ]
      },
    ],
    //个数计数器
    counter: 1,
  },
  //多列自定义选择器改变value的方法
  bindCustomPickerChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    console.log('picker发送选择改变，携带值为', e.detail.value);
    //此处e.detail.value为当前选择的列的下标值数组，如[0,1,0]

    console.log('picker最终选择值为：', onlyArray[0][customIndex[0]], onlyArray[1][customIndex[1]], onlyArray[2][customIndex[2]], onlyArray[3][customIndex[3]]);
    this.setData({
      customIndex: e.detail.value
    })
  },

  //多列自创选择器换列方法
  bindCustomPickerColumnChange: function (e) {
    var customArray = this.data.customArray,
      customIndex = this.data.customIndex,
      onlyArray = this.data.onlyArray;

    customIndex[e.detail.column] = e.detail.value;
    // console.log(onlyArray);

    var searchColumn = () => {
      for (var i = 0; i < customArray.length; i++) {
        var arr1 = [];
        var arr2 = [];
        var arr3 = [];
        if (i == customIndex[0]) {
          for (var j = 0; j < customArray[i].dept.length; j++) {
            arr1.push(customArray[i].dept[j].name);
            if (j == customIndex[1]) {
              for (var k = 0; k < customArray[i].dept[j].product.length; k++) {
                arr2.push(customArray[i].dept[j].product[k].name);
                if (k == customIndex[2]) {
                  for (var m = 0; m < customArray[i].dept[j].product[k].num.length; m++) {
                    arr3.push(customArray[i].dept[j].product[k].num[m].name);
                  }
                  onlyArray[3] = arr3;
                }
              }
              onlyArray[2] = arr2;
            }
          }
          onlyArray[1] = arr1;
        }
      };
    }

    switch (e.detail.column) {
      case 0:
        customIndex[1] = 0;
        customIndex[2] = 0;
        customIndex[3] = 0;
        searchColumn();
        break;
      case 1:
        customIndex[2] = 0;
        customIndex[3] = 0;
        searchColumn();
        break;
      case 2:
        customIndex[3] = 0;
        searchColumn();
        break;
    }
    this.setData({
      onlyArray: onlyArray,
      customIndex: customIndex
    });
  },

  //个数计数器加减
  add: function () {
    if (this.data.counter < 2) {
      this.data.counter++
    }
    this.setData({
      counter: this.data.counter
    })
  },
  sub: function () {
    if (this.data.counter > 0) {
      this.data.counter--
    }
    this.setData({
      counter: this.data.counter
    })
  },

  //表单提交按钮
  formSubmit:  util.throttle(function (ev) {
    var that =this,
    customIndex = that.data.customIndex,
    postData = ev.detail.value,
    label1 = postData.label1,
    weight = postData.weight,
    recoverbody = postData.recoverbody;
      
    if (label1 != '' & that.data.onlyArray[0][customIndex[0]] != '' & weight != '' & recoverbody != '') {
wx.request({
url: 'https://www.zqzqsmile.xyz/recover_glue/login',
data:{
    label1:label1,
    section:that.data.onlyArray[0][customIndex[0]],
    area:that.data.onlyArray[1][customIndex[1]],
    gun:that.data.onlyArray[2][customIndex[2]],
    model:that.data.onlyArray[3][customIndex[3]],
    counterNum:that.data.counter,
    weight:postData.weight,
    recoverbody:postData.recoverbody},
    method:'POST',
    header:{'content-type': 'application/x-www-form-urlencoded'},
    success:function(res){
      console.log(res.data);
      if (label1 != '' & that.data.onlyArray[0][customIndex[0]] != '' & weight != '' & recoverbody != '' & res.data.status == true){
        wx.showToast({
          title: '提交成功！！！',
          icon: 'none', 
          duration: 2000
        })
        that.setData({
          weight:'',
          recoverbody:''
        })}     
}
    })
  } 
  else {
    wx.showToast({
      title: '数据不能为空，提交失败！！！',
      icon: 'none',
      duration: 2000
    })
}  
}),

  //表单重置按钮
  formReset: function (e) {
    console.log('form发生了reset事件')
    this.setData({
      label1:'',
      weight:'',
      recoverbody:'',
    })
  },
 



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
    }
    for (var j = 0; j < data.customArray[data.customIndex[0]].dept.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].dept[j].name);
    }
    for (var k = 0; k < data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product[k].name);
    }
    for (var m = 0; m < data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product[data.customIndex[2]].num.length; m++) {
      data.onlyArray[3].push(data.customArray[data.customIndex[0]].dept[data.customIndex[1]].product[data.customIndex[2]].num[m].name)
    }
    this.setData(data);


   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})