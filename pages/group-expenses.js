import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'date',
      headerName: 'Day',
      width: 150,
    },
    {
        field: 'spentMoney',
        headerName: 'Cost',
        width: 150,
    },
    {
        field: 'details',
        headerName: 'Details',
        width: 150,
    }
]
const GroupExpenses = ({expenses}) => {
    return(
        <div className="container">
           <div className="row">
                <div className="col-md-2 pb_20px" >
                    Add area
                </div>
                <div className="col-md-8 pb_20px" >

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={expenses}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
                    {/* <div className="row">
                        <div className="col-md-8 pb_20px">
                            <p>os</p>
                        </div>
                        <div className="col-md-4 pb_20px">
                            <p>os</p>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-2 pb_20px" >
                    Add area
                </div>
           </div>
        </div>
    )
}

export async function getServerSideProps() {
    try{
      let id = 1;
      let response = await axios.get(`http://localhost:5000/group-expense/group/${id}`);
      let expenses = response.data.expenses;
      expenses = expenses ? expenses : [];
      return {
        props: {
            expenses,
        },
      }
    }catch(err){
      console.log(err);
    }
  }

export default GroupExpenses;