import React from 'react';
import InputSelect from './InputSelect';
import StudentData1 from '../data/StudentData1';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';

const ChartComponent = () => {
    return (
        <div className="ChartComponent">
            <h2>InputSelect component (de checkboxes)</h2>
            <label><InputSelect /> Opdracht moeilijk (zalmroze) </label><br />
            <label><InputSelect /> Opdracht leuk (blauw)</label>
            <h2>ChartComponent</h2>
            <p>Chart component is echt (met weinig data (1 persoon))</p>
            <VictoryChart
                domainPadding={{ x: 15 }}
            >
                <VictoryAxis
                    // tickValues specifies both the number of ticks and where
                    // they are placed on the axis
                    // // tickValues={[1, 2, 3, 4]}
                    tickFormat={StudentData1.assigment}
                    style={{ tickLabels: { fontSize: 10 } }}
                />
                <VictoryAxis
                    dependentAxis
                    // tickFormat specifies how ticks should be displayed
                    tickFormat={StudentData1.difficult}
                    style={{ tickLabels: { fontSize: 10 } }}
                />
                <VictoryGroup offset={15} style={{ data: { width: 10 } }}>
                    <VictoryBar
                        colorScale={"red"}
                        data={StudentData1}
                        x="assignment"
                        y="difficult"
                    />
                    <VictoryBar
                        colorScale={"blue"}
                        data={StudentData1}
                        x="assignment"
                        y="fun"
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    )
}

export default ChartComponent;