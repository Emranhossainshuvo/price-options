import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Student 1', math: 85, physics: 18, chemistry: 52 },
        { id: 2, name: 'Student 2', math: 78, physics: 86, chemistry: 20 },
        { id: 3, name: 'Student 3', math: 52, physics: 49, chemistry: 15 },
        { id: 4, name: 'Student 4', math: 48, physics: 32, chemistry: 37 },
        { id: 5, name: 'Student 5', math: 26, physics: 60, chemistry: 68 },
        { id: 6, name: 'Student 6', math: 40, physics: 25, chemistry: 31 },
        { id: 7, name: 'Student 7', math: 62, physics: 11, chemistry: 94 },
        { id: 8, name: 'Student 8', math: 13, physics: 52, chemistry: 28 },
        { id: 9, name: 'Student 9', math: 65, physics: 44, chemistry: 60 },
        { id: 10, name: 'Student 10', math: 34, physics: 30, chemistry: 12 }
    ];

    return (
        <div>
            <LC width={900} height={500} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='violet'></Line>
                <Line dataKey="physics" stroke='purple'></Line>
                <Line dataKey="chemistry" stroke='crimson'></Line>
            </LC>
        </div>
    );
};

export default LineChart;