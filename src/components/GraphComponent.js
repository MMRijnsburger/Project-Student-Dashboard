import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

class GraphComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // console.log(this.props.averageStudent)
        // console.log(this.props.averageAll)
        return (
            <div className="GraphComponent">
                <h2>GraphComponent</h2>
                <VictoryChart>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickFormat={this.props.averageStudent.assigment}
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
                        data={this.props.averageStudent}
                        x="assignment"
                        y="average"
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#084d8d" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.averageAll}
                        x="assignment"
                        y="average"
                    />
                </VictoryChart>
                <div className="ComponentInfo">
                    <p className="averageAll">Gemiddeld cijfer van een opdracht over alle studenten</p>
                    <p className="averageOneStudent">Gemiddeld cijfer van deze student voor alle opdrachten</p>
                </div>
            </div >
        )
    }
}

export default GraphComponent;