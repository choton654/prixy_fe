import React from 'react';

const DataTable = ({ currentUsers, indexOfFirstItem, currentPage, totalPage, pageNumbers, setCurrentPage, headers }) => {
    return (
        <div className="box-main">
            <div className="box-main-top">
                <div className="box-main-title">User List</div>
                <div className="box-main-top-right">
                    <div className="box-serch-field">
                      
                    </div>
                </div>
            </div>
            <div className="box-main-table">
                <div className="table-responsive">
                    <table id="example2" className="table table-bordered admin-table">
                        <thead>
                            <tr>
                                {/* Render dynamic headers */}
                                {headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Render table rows */}
                        </tbody>
                    </table>
                </div>
            </div>
           {/* Pagination buttons */}
           <ul className="pagination justify-content-end" style={{ marginRight: '20px' }}>
              {/* Previous button */}
              <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
                  <a 
                      onClick={() => this.setState(prevState => ({ currentPage: Math.max(prevState.currentPage - 1, 1) }))}
                      className="page-link"
                      aria-label="Previous"
                  >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                  </a>
              </li>

              {/* Render page numbers */}
              {pageNumbers.map(number => (
                  <li key={number} className={`page-item${currentPage === number ? ' active' : ''}`}>
                      <a onClick={() => this.setState({ currentPage: number })} className="page-link">
                          {number}
                      </a>
                  </li>
              ))}

              {/* Next button */}
              <li className={`page-item${currentPage === totalPage ? ' disabled' : ''}`}>
                  <a 
                      onClick={() => this.setState(prevState => ({ currentPage: Math.min(prevState.currentPage + 1, totalPage) }))}
                      className="page-link"
                      aria-label="Next"
                  >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                  </a>
              </li>
          </ul>   
        </div>
    );
};

export default DataTable;
