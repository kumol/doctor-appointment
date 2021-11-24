import Header from "../components/UI/Header";
//  import Button from '@mui/material/Button';
import { DataGrid } from '@material-ui/data-grid';
import axios from "axios";
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'deposite',
    headerName: 'Deposite',
    width: 150,
    // editable: true,
    // valueGetter: (params) => {
    //   console.log(`depositie ${params.value.deposite}`)
    //   return params.value.deposite;
    // }
  },
  {
    field: 'expense',
    headerName: 'Expense',
    width: 150,
  },
  {
    field: 'mealCount',
    headerName: 'Total Meal',
    width: 150
  }
]
const User = ({ members })=>{
    return (
        <>
        <h4>

          User
        </h4>

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={members}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
        </>
    )
}

export async function getServerSideProps() {
  try{
    let id = 1;
    let response = await axios.get(`http://localhost:5000/user/group/${id}`);
    let members = response.data.members;
    members = members ? members : [];
    return {
      props: {
        members,
      },
    }
  }catch(err){
    console.log(err);
  }
}

export default  User