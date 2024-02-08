var place_data = [
    {
        place: "基隆市",
        tag: "Keelung_City",
        low: 7,
        high: 15,
        weather: "Rainy"
    },

    {
        place: "新北市",
        tag: "New_Taipei_City",
        low: 10,
        high: 19,
        weather: "Sunny"
    },

    {
        place: "台北市",
        tag: "Taipei_City",
        low: 10,
        high: 21,
        weather: "Cloudy"
    },

    {
        place: "桃園市",
        tag: "Taoyuan_City",
        low: 12,
        high: 19,
        weather: "Sunny"
    },

    {
        place: "新竹縣",
        tag: "Hsinchu_County",
        low: 8,
        high: 18,
        weather: "Rainy"
    },

    {
        place: "苗栗縣",
        tag: "Miaoli_County",
        low: 13,
        high: 24,
        weather: "Sunny"
    },

    {
        place: "台中市",
        tag: "Taichung_City",
        low: 15,
        high: 21,
        weather: "Rainy"
    },

    {
        place: "彰化縣",
        tag: "Changhua_County",
        low: 17,
        high: 23,
        weather: "Sunny"
    },

    {
        place: "南投縣",
        tag: "Nantou_County",
        low: 12,
        high: 20,
        weather: "Cloudy"
    },

    {
        place: "雲林縣",
        tag: "Yunlin_County",
        low: 13,
        high: 24,
        weather: "Sunny"
    },

    {
        place: "嘉義縣",
        tag: "Chiayi_County",
        low: 17,
        high: 23,
        weather: "Sunny"
    },

    {
        place: "台南市",
        tag: "Tainan_City",
        low: 11,
        high: 25,
        weather: "Sunny"
    },

    {
        place: "高雄市",
        tag: "Kaohsiung_City",
        low: 13,
        high: 28,
        weather: "Sunny"
    },

    {
        place: "屏東縣",
        tag: "Pingtung_County",
        low: 15,
        high: 29,
        weather: "Sunny"
    },

    {
        place: "宜蘭縣",
        tag: "Yilan_County",
        low: 11,
        high: 19,
        weather: "Rainy"
    },

    {
        place: "花蓮縣",
        tag: "Hualien_County",
        low: 12,
        high: 21,
        weather: "Sunny"
    },

    {
        place: "台東縣",
        tag: "Taitung_County",
        low: 11,
        high: 23,
        weather: "Sunny"
    },

    {
        place: "澎湖縣",
        tag: "Penghu_County",
        low: 10,
        high: 19,
        weather: "Cloudy"
    },

    {
        place: "綠島",
        tag: "Green_Island",
        low: 11,
        high: 19,
        weather: "Rainy"
    },

    {
        place: "蘭嶼",
        tag: "Orchid_Island",
        low: 9,
        high: 19,
        weather: "Cloudy"
    },

    {
        place: "金門縣",
        tag: "Kinmen_County",
        low: 12,
        high: 18,
        weather: "Rainy"
    },

    {
        place: "馬祖",
        tag: "Matsu",
        low: 15,
        high: 23,
        weather: "Sunny"
    },

    {
        place: "連江縣",
        tag: "Lienchiang_County",
        low: 15,
        high: 23,
        weather: "Sunny"
    }
];





$("path").mouseenter(function (e) {
    var tagname=$(this).attr("data-name");
    var result = place_data.filter(function(obj){
        return obj.tag == tagname;
    })
    console.log(result[0].place);
    document.querySelector('.place').textContent = result[0].tag;
document.querySelector('.temp').textContent = 
result[0].low.toString() + '~' + result[0].high.toString();
document.querySelector('.weather').textContent = result[0].weather;

})


