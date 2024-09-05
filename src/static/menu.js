
import tempura from "../static/media/img/main-menu/tempura.jpg";
import baccala from "../static/media/img/main-menu/baccala.jpg";
import burrata from "../static/media/img/main-menu/burrata.jpg";
import cake from "../static/media/img/main-menu/cake.jpg";
import carpaccio from "../static/media/img/main-menu/carpaccio.jpg";
import cheesecake from "../static/media/img/main-menu/cheesecake.jpg";
import chickencurry from "../static/media/img/main-menu/chickencurry.jpg";
import cremebrulle from "../static/media/img/main-menu/cremebrulle.jpg";
import croquetas from "../static/media/img/main-menu/croquetas.jpg";
import duck from "../static/media/img/main-menu/duck.jpg";
import filete from "../static/media/img/main-menu/filete.jpg";
import fruit from "../static/media/img/main-menu/fruit.jpg";
import icecream from "../static/media/img/main-menu/icecream.jpg";
import ravioli from "../static/media/img/main-menu/ravioli.jpg";
import risotto from "../static/media/img/main-menu/risotto.jpg";
import salmontartar from "../static/media/img/main-menu/salmontartar.jpg";
import soup from "../static/media/img/main-menu/soup.jpg";
import tiramisu from "../static/media/img/main-menu/tiramisu.jpg";


export const menu = {
    starters:[
        {id: 1,dishName:"starter1", dishDescription:"starter1desc",img:salmontartar },
        {id: 2,dishName:"starter2", dishDescription:"starter2desc",img: croquetas },
        {id: 3,dishName:"starter3", dishDescription:"starter3desc",img: carpaccio },
        {id: 4,dishName:"starter4", dishDescription:"starter4desc",img: tempura },
        {id: 5,dishName:"starter5", dishDescription:"starter5desc",img: burrata },
        {id: 6,dishName:"starter6", dishDescription:"starter6desc",img: soup},
    ],
    main:[
        {id: 1,dishName:"main1", dishDescription:"main1desc",img: filete },
        {id: 2,dishName:"main2", dishDescription:"main2desc",img: risotto },
        {id: 3,dishName:"main3", dishDescription:"main3desc",img: baccala },
        {id: 4,dishName:"main4", dishDescription:"main4desc",img: chickencurry },
        {id: 5,dishName:"main5", dishDescription:"main5desc",img: ravioli },
        {id: 6,dishName:"main6", dishDescription:"main6desc",img: duck},
    ],
    dessert:[
        {id: 1,dishName:"dessert1", dishDescription:"dessert1desc",img: cake },
        {id: 2,dishName:"dessert2", dishDescription:"dessert2desc",img: cheesecake },
        {id: 3,dishName:"dessert3", dishDescription:"dessert3desc",img: cremebrulle },
        {id: 4,dishName:"dessert4", dishDescription:"dessert4desc",img: tiramisu },
        {id: 5,dishName:"dessert5", dishDescription:"dessert5desc",img: icecream },
        {id: 6,dishName:"dessert6", dishDescription:"dessert6desc",img: fruit},
    ]
}