import axios from 'axios';
import React from 'react'
import { getAllFundraisersAPI } from '../../config';
import { useQuery } from '@tanstack/react-query';

function FundraiserList() {
    const token = localStorage.getItem('token'); // Parse as boolean

    const {data,isLoading, isError, refetch} = useQuery({
        queryKey: 'getAllFundraisers',
        queryFn: async () => {
            const { data } = await axios.get(getAllFundraisersAPI, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return data?.data
        },
        enabled: token ? true : false
    })
    // console.log('---req data---',token,data);

    

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Fundraisers</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div class="box-main">
                            <div class="box-main-top">
                                <div class="box-main-title">Fundraisers List</div>
                                
                            </div>
                            <div class="box-main-table">
                                <div class="table-responsive">
                                    <table id="example2" className="table table-bordered admin-table">
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Start Date</th>
                                                <th>Target Amount</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((req, index) => (
                                                <tr key={index}>
                                                    <td>{req.title}</td>
                                                    <td>{req.start_date}</td> 
                                                    <td>{req.target_amount}</td> 
                                                    <td>{req.isVerified ? 'Verified' : 'Not Verified'}</td>
                                                    <td>
                                                        {/* <button class="ml-2 btn btn-sm btn-primary" disabled={req.isVerified} onClick={ () => handleApprove(req.id)}>{req.isVerified ? 'Approved' : 'Approve'}</button> */}
                                                        <a href={`/fundraisers/detail/${req.id}`} ><i class="fa fa-eye " aria-hidden="true"></i></a>
                                                    </td> 
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
                             
                        </div>    
                       
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FundraiserList

// Title, start date, target amount, status. eye icon