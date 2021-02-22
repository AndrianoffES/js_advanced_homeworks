Vue.component('sorting',{
    template:` <div class="productFilters">
                <div class="trendingFilter">
                    <h3>TRENDING NOW</h3>
                    <nav>
                        <a href="#">Bohemian</a>
                        <span>|</span>
                        <a href="#">Floral</a>
                        <span>|</span>
                        <a href="#">Lace</a>
                        <span>|</span>
                        <a href="#">Floral</a>
                        <span>|</span>
                        <a href="#">Lace</a>
                        <span>|</span>
                        <a href="#">Bohemian</a>
                        <span>|</span>
                    </nav>

                </div>
                <div class="sizeFilter">
                    <h3>SIZE</h3>
                    <div class="checkboxesArea">
                        <div class="checkboxesWrap">
                            <input id="XXS" type="checkbox">
                            <label for="XXS">XXS</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="XS" type="checkbox">
                            <label for="XS">XS</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="S" type="checkbox">
                            <label for="S">S</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="M" type="checkbox">
                            <label for="M">M</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="L" type="checkbox">
                            <label for="L">L</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="XL" type="checkbox">
                            <label for="XL">XL</label>
                        </div>
                        <div class="checkboxesWrap">
                            <input id="XXL" type="checkbox">
                            <label for="XXL">XXL</label>
                        </div>

                    </div>
                </div>
                <div class="priceFilter">
                    <h3>PRICE</h3>
                    <div class="range"></div>
                    <div class="priceValue">
                        <span>$52</span>
                        <span>$400</span>
                    </div>
                </div>
            </div>
            

            </div>`
})