import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTicket, removeTicket } from '../../Redux/Action/ticketAction';
import { ticketSelectedSelector } from '../../Redux/Selector/ticketSelector';
import './BaiTapBookingTicket.css';
class HangGhe extends Component {

    timKiemHangGhe = (id) => {
        const { ticketSelected } = this.props;
        return ticketSelected.findIndex((ghe) => ghe.soGhe === id)
    }

    renderSoHang = ({ danhSachGhe = [] }) => {

        return danhSachGhe.map((item, index) => {
            return (
                <button key={index + ''} className='rowNumber'>
                    {item.soGhe}
                </button>
            )
        })
    }
    renderSoGhe = ({ danhSachGhe = [], hang = '' }) => {
        const { addTicket, removeTicket } = this.props;
        return <div className='d-flex'>
            {hang}
            {
                danhSachGhe.map((item, index) => {
                    let indexSoGheDangChon = this.timKiemHangGhe(item.soGhe);
                    let cssSelected = indexSoGheDangChon > -1 ? 'gheDangChon' : '';
                    let cssGhe = item.daDat ? 'gheDuocChon' : cssSelected;
                    return (
                        <button disabled={item.daDat} key={index + ''} className={`ghe ${cssGhe}`} onClick={() => {
                            if (indexSoGheDangChon > -1) {
                                return removeTicket(item.soGhe)
                            }
                            addTicket(item)
                        }}>
                            {item.soGhe}
                        </button>
                    )
                })
            }
        </div>
    }

    renderHangGhe = () => {
        const { ghe } = this.props;
        if (ghe.hang === '') {
            return <div className='ml-3 mb-4'>
                {this.renderSoHang(ghe)}
            </div>
        }
        return this.renderSoGhe(ghe)



    }

    render() {
        return (
            <div className='text-light text-left ml-5 mt-1' style={{ fontSize: '25px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (rootState) => {
    return {
        ticketSelected: ticketSelectedSelector(rootState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTicket: (ticket) => dispatch(addTicket(ticket)),
        removeTicket: (id) => dispatch(removeTicket(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)