import React from 'react'; 
import { Table } from 'semantic-ui-react';

class SchedulePage extends React.Component{
    render() {
        return(
            <div className="ui container">
                <Table color="green" striped>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Class</Table.HeaderCell>
                        <Table.HeaderCell>Instructor</Table.HeaderCell>
                        <Table.HeaderCell>Schedule</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Street Dance</Table.Cell>
                        <Table.Cell>Paulo</Table.Cell>
                        <Table.Cell>8:00 am</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Body Pump</Table.Cell>
                        <Table.Cell>Ricky</Table.Cell>
                        <Table.Cell>9:00 am</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Shamuba</Table.Cell>
                        <Table.Cell>Brandon</Table.Cell>
                        <Table.Cell>10:00 am</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Zumba</Table.Cell>
                        <Table.Cell>Georgette</Table.Cell>
                        <Table.Cell>11:00 am</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Body Combat</Table.Cell>
                        <Table.Cell>Wendy</Table.Cell>
                        <Table.Cell>3:00 pm</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Spinning</Table.Cell>
                        <Table.Cell>Patricia</Table.Cell>
                        <Table.Cell>4:00 pm</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cross Core</Table.Cell>
                        <Table.Cell>Pedro</Table.Cell>
                        <Table.Cell>5:00 pm</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Synergy 360</Table.Cell>
                        <Table.Cell>Ana</Table.Cell>
                        <Table.Cell>6:00 pm</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default SchedulePage;