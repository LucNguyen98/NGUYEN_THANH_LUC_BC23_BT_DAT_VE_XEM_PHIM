import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTicket } from "../../Redux/Action/ticketAction";
import { ticketSelectedSelector, ticketTotalSelector } from "../../Redux/Selector/ticketSelector";

class GioHangBookingTicket extends Component {
  renderRowThongTinGhe = () => {
    const { ticketSelected, removeTicket } = this.props;
    return ticketSelected.map((ghe, index) => {
      return (
        <tr key={index + ""}>
          <td>{ghe.soGhe}</td>
          <td>{ghe.gia.toLocaleString()}</td>
          <td>
            <button className="btn bg-light" onClick={() => removeTicket(ghe.soGhe)}>Huỷ</button>
          </td>
        </tr>
      );
    });
  };

  renderRowTongTien = () => (
    <tr>
      <td></td>
      <td>Tổng tiền</td>
      <td>
        {this.props.ticketTotal.toLocaleString()}
      </td>
    </tr>
  )
  render() {
    return (
      <div className="text-left mt-2">
        <h2 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h2>

        <div
          className="mt-5 text-light"
          style={{
            fontSize: "30px",
          }}
        >
          <div className="d-flex align-items-center">
            <button className="gheDuocChon"></button>
            <span className="ml-2">ghế đã đặt</span>
          </div>

          <div className="d-flex align-items-center">
            <button className="gheDangChon"></button>
            <span className="ml-2">ghế đang đặt</span>
          </div>

          <div className="d-flex align-items-center">
            <button className="ghe ml-0"></button>
            <span className="ml-2">ghế chưa đặt</span>
          </div>
        </div>

        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.renderRowThongTinGhe()}
              {this.renderRowTongTien()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootState) => {
  return {
    ticketSelected: ticketSelectedSelector(rootState),
    ticketTotal: ticketTotalSelector(rootState)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTicket: (id) => dispatch(removeTicket(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GioHangBookingTicket);
