import React from "react";
import "./styles/OrderDetails.css";
import productImage from "../../assets/product_image_1.jpg";
import voucherLogo from "../../assets/voucher_logo_1.png";

const OrderDetails = () => {
  return (
    <div className="order_details">
      <div className="card">
        <div className="card_heading">
          <div className="card_title">Delivery Address</div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="card_text">Please choose destination address</div>
      </div>

      <div className="card">
        <div className="drop_ship">
          <div className="dropship_title">Dropship</div>
          <i className="fas fa-toggle-on dropship_toggle"></i>
        </div>
      </div>

      <div className="card">
        <div className="card_heading">
          <div className="card_title">Shipping Option</div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="card_text">Please choose your shipping method</div>
      </div>

      <div className="card">
        <div className="card_heading">
          <div className="card_title">Payment Option</div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="card_text">Please choose Payment Option method</div>
      </div>

      <div className="card">
        <div className="card_heading">
          <div className="card_title">Delivery Address</div>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="card_text">Please choose destination address</div>
      </div>

      <div className="card">
        <div className="card_title">Order Detail</div>
        <div className="product_details">
          <div className="product_image">
            <img src={productImage} alt="product-image" />
          </div>
          <div className="product_heading">
            <div className="product_title ">ORIGNAL XYZONE BRAND TR1255</div>
            <div className="product_variant ">Variant : RED, 40</div>
            <div className="product_price">
              <div className="price_text">1 PCS (1.100gr) @</div>
              <div className="price_rate">Rp. 100.000</div>
            </div>
          </div>
        </div>
        <input
          className="product_message"
          placeholder="Optional message here"></input>

        <div className="product_details">
          <div className="product_image">
            <img src={productImage} alt="product-image" />
          </div>
          <div className="product_heading">
            <div className="product_title ">ORIGNAL XYZONE BRAND TR1255</div>
            <div className="product_variant ">Variant : RED, 40</div>
            <div className="product_price">
              <div className="price_text">1 PCS (1.100gr) @</div>
              <div className="price_rate">Rp. 100.000</div>
            </div>
          </div>
        </div>
        <input
          className="product_message"
          placeholder="Optional message here"></input>
      </div>

      <div className="card">
        <form className="voucher">
          <div className="voucher_logo">
            <img src={voucherLogo} alt="voucher-logo" />
          </div>
          <div className="voucher_input">
            <input
              type="text"
              className="voucher_code"
              placeholder="voucher code"
            />
            <button type="button">Apply</button>
          </div>
        </form>
      </div>
      <div className="card">
        <div className="order_summary">
          <ul>
            <li className="item_list">
              <span>Total items</span>
              <span>2 item</span>
            </li>
            <li className="item_list">
              <span>Total Weight</span>
              <span>2.2000 Gram</span>
            </li>
            <li className="item_list">
              <span>Total Order</span>
              <span>Rp. 360.000</span>
            </li>
            <li className="item_list">
              <span>Voucher</span>
              <span>Rp. 0</span>
            </li>
            <li className="item_list">
              <span>Shipping Cost</span>
              <span>Rp. 0</span>
            </li>
            <li className="item_list">
              <span>Grand Total</span>
              <span className="grand_total_price">Rp. 360.000</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="term_condition_text">With payment, I agree with terms & condition.</p>
      <button className="order_finish_button">FINISH</button>
    </div>
  );
};

export default OrderDetails;
