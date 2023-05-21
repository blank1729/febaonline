import { FunctionalComponent } from "preact";

interface Event {
  id: number;
  title: string;
  date: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Event 1",
    date: "May 25, 2023",
  },
  {
    id: 2,
    title: "Event 2",
    date: "June 1, 2023",
  },
  {
    id: 3,
    title: "Event 3",
    date: "June 8, 2023",
  },
  // Add more events as needed
];

const ProgramsSection: FunctionalComponent = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Events</h3>
            <ul className="space-y-2">
              {events.map((event) => (
                <li key={event.id} className="text-gray-600">
                  <span className="font-bold">{event.title}</span> -{" "}
                  {event.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Calendar</h3>
            {/* Your calendar component goes here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
