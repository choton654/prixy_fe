import React, { Component } from 'react'
export default class Dashboard extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <a href="">
                                    <div className="small-box bg-orange">
                                        <div className="inner">
                                            <p>Total Users</p>
                                            <h3>10</h3>
                                        </div>
                                    </div>        
                                </a>
                            </div>
                            <div className="col-lg-3 col-6">
                                <a href="">
                                    <div className="small-box bg-blue">
                                        <div className="inner">
                                            <p>Total WithDraw</p>
                                            <h3>10</h3>
                                        </div>
                                    </div>        
                                </a>
                            </div>
                            <div className="col-lg-3 col-6">
                                <a href="">
                                    <div className="small-box bg-purple">
                                        <div className="inner">
                                            <p>Total Amount</p>
                                            <h3>10</h3>
                                        </div>
                                    </div>        
                                </a>
                            </div>
                            <div className="col-lg-3 col-6">
                                <a href="">
                                    <div className="small-box bg-green">
                                        <div className="inner">
                                            <p>Total Balance</p>
                                            <h3>10</h3>
                                        </div>
                                    </div>        
                                </a>
                            </div>
                        </div>
                    </div>    
                </section>
            </div>    
        )
    }
}