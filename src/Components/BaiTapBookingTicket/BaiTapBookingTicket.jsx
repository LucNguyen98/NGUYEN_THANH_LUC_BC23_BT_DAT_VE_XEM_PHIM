import React, { Component } from 'react'
import './BaiTapBookingTicket.css';
import danhSachGhe from '../../danhSachGhe.json'
import HangGhe from './HangGhe';
import GioHangBookingTicket from './GioHangBookingTicket';

export default class BaiTapBookingTicket extends Component {


  renderTicketList = () => {
    return danhSachGhe.map((ghe, index) => <HangGhe key={index + ''} ghe={ghe} />)
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: "url(./bgmovie.jpg)",
            height: '100%',
            width: '100%',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            position: 'fixed'
          }}
        >
        </div>
        <div className="overlay">
        </div>

        <div class="container-fluid">
          <div class="row">
            <div className="col-8">
              <h1 className='display-4' style={{
                color: '#ffc107'
              }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
              <h3 className='mt-3 text-light'>Màn hình</h3>
              <div className="screen"></div>
              {this.renderTicketList()}
            </div>
            <div className="col-4">
              <GioHangBookingTicket />
            </div>
          </div>
        </div>

      </div>
    )
  }
}
