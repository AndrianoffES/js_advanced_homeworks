Vue.component('accordion-menu',{
    methods:{

    },
    template:`<div class="accordion" id="accordionExample">
                <div class="card navUnit">
                    <div class="navHeading" id="r" data-toggle="collapse" data-target="#collapseOne">
                        CATEGORY
                        <i class="fas fa-caret-down"></i>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <nav class="card-body">
                            <a href="#">Accessories</a>
                            <a href="#">Bags</a>
                            <a href="#">Denim</a>
                            <a href="#">Hoodies & Sweatshirts</a>
                            <a href="#">Jackets & Coats</a>
                            <a href="#">Pants</a>
                            <a href="#">Polos</a>
                            <a href="#">Shirts</a>
                            <a href="#">Shoes</a>
                            <a href="#">Shorts</a>
                            <a href="#">Sweaters & Knits</a>
                            <a href="#">T-Shirts</a>
                            <a href="#">Tanks</a>
                        </nav>
                    </div>
                </div>
                <div class="card navUnit">
                    <div class="navHeading" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                        BRAND
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <nav class="card-body">
                            <a href="#">ZARA</a>
                            <a href="#">OGGY</a>
                            <a href="#">HENDERSON</a>
                            <a href="#">D & G </a>
                            <a href="#">ARMANY</a>
                            <a href="#">AMIRI</a>
                            <a href="#">BALMAIN</a>
                            <a href="#">BOSS</a>
                            <a href="#">GUCCY</a>
                            <a href="#">LACOSTE</a>
                            <a href="#">OFF WHITE</a>
                            <a href="#">LOUIS VUITTON</a>
                            <a href="#">VETEMENTS</a>
                        </nav>
                    </div>
                </div>
                <div class="card navUnit">
                    <div class="navHeading" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                        DESIGNER
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <nav class="card-body">
                            <a href="#">ZARA</a>
                            <a href="#">OGGY</a>
                            <a href="#">HENDERSON</a>
                            <a href="#">D & G </a>
                            <a href="#">ARMANY</a>
                            <a href="#">AMIRI</a>
                            <a href="#">BALMAIN</a>
                            <a href="#">BOSS</a>
                            <a href="#">GUCCY</a>
                            <a href="#">LACOSTE</a>
                            <a href="#">OFF WHITE</a>
                            <a href="#">LOUIS VUITTON</a>
                            <a href="#">VETEMENTS</a>
                        </nav>
                    </div>
                </div>
            </div>`
})