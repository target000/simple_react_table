import React from "react";
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from "material-ui/Table";

export default () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Chesty Puller</TableRowColumn>
        <TableRowColumn>Nailed Japs hard</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Xi Lu - Maj. Lu</TableRowColumn>
        <TableRowColumn>Active Duty, Shipped to warzone</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Capt. Price</TableRowColumn>
        <TableRowColumn>Old fart still kicking</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Suckerburg</TableRowColumn>
        <TableRowColumn>Facefucked.com</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
