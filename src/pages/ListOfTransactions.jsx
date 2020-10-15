import React, { useState, useEffect } from "react";
import { listTransactions } from "../graphql/queries";
import { API, graphqlOperation } from "@aws-amplify/api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

export default function ListOfTransactions() {
  const [nextToken, setNextToken] = useState(undefined);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [nextNextToken, setNextNextToken] = useState();
  const [previousTokens, setPreviousTokens] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const handleChangeRowsPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleChangePage = (event, newPage) => {
    if (newPage < page) {
      setNextToken(previousTokens.pop());
      setPreviousTokens([...previousTokens]);
      setNextNextToken(null);
    } else {
      setPreviousTokens((prev) => [...prev, nextToken]);
      setNextToken(nextNextToken);
      setNextNextToken(null);
    }
    setPage(newPage);
  };

  useEffect(() => {
    const fetch = async () => {
      const variables = {
        nextToken,
        limit,
      };
      const result = await API.graphql(
        graphqlOperation(listTransactions, variables)
      );
      setNextNextToken(result.data.listTransactions.nextToken);
      setTransactions(result.data.listTransactions.items);
    };

    fetch();
  }, [nextToken, limit]);

  return (
    <div>
      <h1>List of transactions</h1>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">user</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">is pay</TableCell>
                <TableCell align="right">owner</TableCell>
                <TableCell align="right">created at</TableCell>
                <TableCell align="right">update at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.isPay}</TableCell>
                  <TableCell align="right">{row.owner}</TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">{row.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={100}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
