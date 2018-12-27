export class RouteModel {
    constructor(
        public items:{
            name: string,
            stations:{
                status: any[],
                station: string,
                time: string
            }
        }
    )  
    { 

    }
    
    i : number;

    // Routes = [
    //     {
    //     name:'Shek Pai Wan/Aberdeen',
    //     stations:[
    //         {
    //             status: ['pickup'],
    //             station: 'Fu Hong Society Rehabilitation Centre',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Pik Yuet House, Shek Pai Wan Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'On Fai House, Yue Fai Court',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: '7-Eleven, Nam Ning Street, Aberdeen Centre',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: '7-Eleven, Nam Ning Street, Aberdeen Centre',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'Block K, Queen Mary Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'Fung Yiu King Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'The Duchess of Kent Children’s Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'MacLehose Rehabilitation Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['dropoff'],
    //             station: 'Bus Stop, Pokfulam Village',
    //             time: ''
    //         },
    //         {
    //             status: ['dropoff'],
    //             station: '7-Eleven, Nam Ning Street, Aberdeen Centre',
    //             time: ''
    //         }]
    //     },
    //     {
    //         name:'Chi Fu/Wah Fu',
    //         stations:[
    //         {
    //             status: ['pickup'],
    //             station: 'Bus Stop, Block 1 Chi Fu Fa Yuen',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Bus Terminal, Chi Fu Fa Yuen',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Wah Lok House, Wah Fu Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Wah Mei House, Wah Fu Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Waterfall Bay Park, Wah Fu Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Bus Terminal, Wah Fu (2) Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Wah Hing House, Wah Fu Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'Fung Yiu King Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'The Duchess of Kent Children’s Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup','dropoff'],
    //             station: 'MacLehose Rehabilitation Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup','dropoff'],
    //             station: 'Block K, Queen Mary Hospital',
    //             time: ''
    //         }]   
    //     },
    //     {
    //         name:'Wah Kwai/Tin Wan',
    //         stations:[
    //         {
    //             status: ['pickup'],
    //             station: 'Wah Kwai Shopping Centre, Wah Kwai Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Bank of China (HK), Tin Wan Street',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Tin Chak House, Tin Wan Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup'],
    //             station: 'Bus Stop, Tin Wan Shopping Centre',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'Block K, Queen Mary Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'Fung Yiu King Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'The Duchess of Kent Children’s Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['pickup', 'dropoff'],
    //             station: 'MacLehose Rehabilitation Hospital',
    //             time: ''
    //         },
    //         {
    //             status: ['dropoff'],
    //             station: 'Bank of China (HK), Tin Wan Street',
    //             time: ''
    //         },
    //         {
    //             status: ['dropoff'],
    //             station: 'Tin Chak House, Tin Wan Estate',
    //             time: ''
    //         },
    //         {
    //             status: ['dropoff'],
    //             station: 'Bus Stop, Tin Wan Shopping Centre',
    //             time: ''
    //         }]   
    //     }
    // ]
 
    // addItem(item){
    //     this.items.push({
    //         title: item,
    //         checked: false
    //     });
    // }
 
    // removeItem(item){
    //     let i = 0;
    //     for(i = 0; i < this.items.length; i++) {
    //         if(this.items[i] == item){
    //             this.items.splice(i, 1);
    //         }
    //     }
 
    // }
 
    // renameItem(item, title){
    //     let i = 0;
    //     for(i = 0; i < this.items.length; i++) {
    //         if(this.items[i] == item){
    //             this.items[i].title = title;
    //         }
    //     }
    // }
 
    // setTitle(title){
    //     this.title = title;
    // }
}