<template>
  <div>
    <breadcumb :page="'Cart'" :folder="'Ecommerce'" />

    <b-row>
      <b-col md="8">
        <b-card>
          <div class="cart d-flex align-items-center justify-content-between">
            <div class="cart-image">
              <img
                src="@/assets/images/products/speaker-1.jpg"
                style="width:220px; height:120px"
                alt
              />
            </div>
            <div class="cart-description flex-grow-1 ml-4">
              <h6 class="font-weight-700 text-18 mb-2">Portable Speaker with HD Sound</h6>
              <p class="cursor-pointer">
                category:
                <span class="text-primary">Gadget</span>
              </p>
              <p class="text-success">In Stock</p>
            </div>
            <div class="cart-action text-center">
              <h5 class="font-weight-700 text-20 mb-4">$ 1500</h5>
              <b-button variant="outline-danger" class="pr-5 pl-4">
                <i class="i-Close-Window mr-2 font-weight-700 align-middle text-17"></i>
                REMOVE
              </b-button>
              <!-- <div class="cart-quantity text-center">
                <div class="input-group">
                  <span class="">
                    <b-button variant="danger">+</b-button>
                  </span>
                  
                  <b-form-input class="text-center" value="2" min="1" max="5">

                  </b-form-input>
                  <span class="input-group-btn">
                    <span class="">
                    <b-button variant="success">-</b-button>
                  </span>
                  </span>
                </div>
              </div> -->
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="4">
          <b-card title="Order Summary">
              <div class="ul-cart__order">
                <div class="d-flex justify-content-between mb-2">
                  <p class="font-weight-500 text-16 text-mute m-0">Total MRP: </p>
                  <p class="text-16 m-0">$800</p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="font-weight-500 text-16 text-mute">Discount: </p>
                  <p class="text-16"> 5% </p>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="font-weight-500 text-16 text-mute">Delivery Charges: </p>
                  <p class="text-16"> Free </p>
                </div>
                <hr class="mt-2 mb-2">

                <div class="d-flex justify-content-between">
                  <p class="font-weight-800 text-16 text-muted">Total: </p>
                  <p class="text-16"> $840 </p>
                </div>
              </div>
          </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { mapGetters , mapActions } from "vuex" 

export default {
  data(){
    return{
      
    }
  },
  methods:{

  }
}
</script>>
<style>
/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}


</style>