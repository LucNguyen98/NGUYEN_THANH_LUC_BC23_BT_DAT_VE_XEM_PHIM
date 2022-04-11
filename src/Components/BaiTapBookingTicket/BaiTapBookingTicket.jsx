import React, { Component } from 'react'
import './BaiTapBookingTicket.css';
import danhSachGhe from '../../danhSachGhe.json'
import HangGhe from './HangGhe';

export default class BaiTapBookingTicket extends Component {


  renderTicketList = () => {
    return danhSachGhe.map((ghe, index) => <HangGhe key={index + ''} ghe={ghe} />)
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./bgmovie.jpg)",
          height: '100vh',
          width: '100%',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          position: 'fixed'
        }}
      >
        <div className="overlay">
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

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
