import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

class GraphComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props.studentData)
        return (
            <div className="GraphComponent">
                <h2>GraphComponent</h2>
                <VictoryChart>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickFormat={this.props.studentData.assigment}
                        style={{ tickLabels: { angle: 90, textAnchor: 'start', fontSize: 6 } }}
                    />
                    <VictoryAxis
                        dependentAxis
                        // tickFormat specifies how ticks should be displayed
                        tickFormat={[0, 1, 2, 3, 4, 5]}
                        style={{ tickLabels: { fontSize: 10 } }}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#fbae94" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.studentData}
                        x="assignment"
                        y="difficult"
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#084d8d" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.studentData}
                        x="assignment"
                        y="fun"
                    />
                </VictoryChart>
            </div>
        )
    }
}

export default GraphComponent;