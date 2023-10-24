import AverageStudents from "../../Components/AverageStudents/AverageStudents";
import PaymentsChart from "../../Components/PaymentsChart/PaymentsChart";
import TotalProfit from "../../Components/TotalProfitChart/TotalProfit";
import NumberStudent from "../../Components/numberStudent/numberStudent";
import DateReport from "./../../Components/DateReport/DateReport";
const Report = () => {
  const dataItems = [
    {
      title: "العدد الكلى للطلاب",
      numberStudent: 143.624,
      precentStudent: 11.01,
    },
    { title: "الطلاب الجدد", numberStudent: 143.624, precentStudent: 11.01 },
    {
      title: "الطلاب الراحلين ",
      numberStudent: 143.624,
      precentStudent: 11.01,
    },
  ];
  return (
    <div className="container ">
      {/* date Component */}
      <DateReport />
      {/* statistics of students */}
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-3 mt-7">
        {dataItems.map((item, index) => (
          <NumberStudent
            key={index}
            title={item.title}
            numberStudent={item.numberStudent}
            precentStudent={item.precentStudent}
          />
        ))}
      </section>
      {/* Average of Student */}
      <section className="grid grid-cols-6  md:grid-cols-6 lg:grid-cols-12 gap-3 mt-7 ">
        <AverageStudents title={"متوسط حضور الطلاب"} />
        <AverageStudents title={"متوسط درجات الطلاب "} />
      </section>
      {/* payments */}
      <section className="grid grid-cols-6  md:grid-cols-6 lg:grid-cols-12 mt-7 h-[300px] gap-3">
       {/* Profit chart */}
        <div className="md:col-span-6 lg:col-span-12 xl:col-span-7 gap-6 ml-5 mr-8 bg-white rounded-[10px] justify-center p-10 border border-white-200 ">
          <div>
            <span className="ml-80 text-[19px]">الربح الكلى</span>
            <span className=" text-primaryColor font-bold mr-40 ">
              522.450ج
            </span>
            <hr className="my-8 px-20" />
          </div>
          <TotalProfit />
        </div>
        {/* PaymentsChart */}
        <div className="sm:col-span-6  md:col-span-6 lg:col-span-12 xl:col-span-5 gap-6 ml-5 mr-8 bg-white rounded-[10px] justify-center p-10 border border-white-200 ">
          <div>
            <span className="ml-80 text-[19px]">حالة الدفع</span>
            <hr className="my-8 px-20" />
          </div>
          <PaymentsChart />
        </div>
      </section>
    </div>
  );
};

export default Report;
