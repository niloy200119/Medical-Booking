import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function MyChart() {
  const [serialList, setSerialList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedSerialData = getStoredDoc();
    const ConvertedStoredDoc = storedSerialData.map((id) => parseInt(id));
    const mySerialList = data.filter((doctor) =>
      ConvertedStoredDoc.includes(doctor.id)
    );
    setSerialList(mySerialList);
  }, []);

  // Function to cancel an appointment
  const cancelAppointment = (id) => {
    const updatedList = serialList.filter((doctor) => doctor.id !== id);
    setSerialList(updatedList);

    // Update localStorage
    const storedData = getStoredDoc();
    const updatedStoredData = storedData.filter(
      (docId) => parseInt(docId) !== id
    );
    localStorage.setItem("appointList", JSON.stringify(updatedStoredData));
  };

  const chartData = serialList.map((doctor) => ({
    name: doctor.name,
    charge: doctor.charge,
    experience: doctor.experience,
  }));

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="charge"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      ); }
    </div>
  );
}
