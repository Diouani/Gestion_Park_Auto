// import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
// @Component({
//   selector: 'app-dual-list-transfer',
//   templateUrl: './dual-list-transfer.component.html',
//   styleUrls: ['./dual-list-transfer.component.scss'],
// })
// export class DualListTransferComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}





//      dataArray1 = [
//       {
//         city: "Beijing",
//         value: 132,
//       },
//       {
//         city: "Shanghai",
//         value: 422,
//       },
//       {
//         city: "Chengdu",
//         value: 232,
//       },
//       {
//         city: "Wuhan",
//         value: 765,
//       },
//       {
//         city: "Tianjin",
//         value: 876,
//       },
//       {
//         city: "Guangzhou",
//         value: 453,
//       },
//       {
//         city: "Hongkong",
//         value: 125,
//       },
//     ];

//      settings1 = {
//       dataArray: this.dataArray1,
//       itemName: "city",
//       valueName: "value",
//       callable: function (items) {
//         console.dir(items);
//       },
//     };

//     $("#transfer1").transfer(settings1);

//      dataArray2 = [
//       {
//         city: "Beijing",
//         value: 132,
//         disabled: true,
//       },
//       {
//         city: "Shanghai",
//         value: 422,
//         selected: true,
//       },
//       {
//         city: "Chengdu",
//         value: 232,
//       },
//       {
//         city: "Wuhan",
//         value: 765,
//         selected: true,
//         disabled: true,
//       },
//       {
//         city: "Tianjin",
//         value: 876,
//       },
//       {
//         city: "Guangzhou",
//         value: 453,
//       },
//       {
//         city: "Hongkong",
//         value: 125,
//       },
//     ];

//      settings2 = {
//       dataArray: this.dataArray2,
//       itemName: "city",
//       valueName: "value",
//       callable: function (items) {
//         console.dir(items);
//       },
//     };

//     $("#transfer2").transfer(settings2);

//      groupDataArray1 = [
//       {
//         groupName: "China",
//         groupData: [
//           {
//             city: "Beijing",
//             value: 122,
//           },
//           {
//             city: "Shanghai",
//             value: 643,
//           },
//           {
//             city: "Qingdao",
//             value: 422,
//           },
//           {
//             city: "Tianjin",
//             value: 622,
//           },
//         ],
//       },
//       {
//         groupName: "Japan",
//         groupData: [
//           {
//             city: "Tokyo",
//             value: 132,
//           },
//           {
//             city: "Osaka",
//             value: 112,
//           },
//           {
//             city: "Yokohama",
//             value: 191,
//           },
//         ],
//       },
//     ];

//      settings3 = {
//       groupDataArray: this.groupDataArray1,
//       groupItemName: "groupName",
//       groupArrayName: "groupData",
//       itemName: "city",
//       valueName: "value",
//       callable: function (items) {
//         console.dir(items);
//       },
//     };

//     $("#transfer3").transfer(settings3);

//      groupDataArray2 = [
//       {
//         groupName: "China",
//         groupData: [
//           {
//             city: "Beijing",
//             value: 122,
//             selected: true,
//           },
//           {
//             city: "Shanghai",
//             value: 643,
//             disabled: true,
//           },
//           {
//             city: "Qingdao",
//             value: 422,
//           },
//           {
//             city: "Tianjin",
//             value: 622,
//           },
//         ],
//       },
//       {
//         groupName: "Japan",
//         groupData: [
//           {
//             city: "Tokyo",
//             value: 132,
//             selected: true,
//           },
//           {
//             city: "Osaka",
//             value: 112,
//             selected: true,
//           },
//           {
//             city: "Yokohama",
//             value: 191,
//             selected: true,
//           },
//         ],
//       },
//     ];

//      settings4 = {
//       groupDataArray: this.groupDataArray2,
//       groupItemName: "groupName",
//       groupArrayName: "groupData",
//       itemName: "city",
//       valueName: "value",
//       callable: function (items) {
//         console.dir(items);
//       },
//     };

//      transfer = $("#transfer4").transfer(this.settings4);
//     // get selected items
//      items = this.transfer.getSelectedItems();
//     console.log("Manually get selected items", items);

// }
