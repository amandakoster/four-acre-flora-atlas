import AddObservationForm from "@/components/forms/AddObservationForm";

export default function ObservationsPage() {
  return (
    <main className="p-10">
      <h1 className="mb-8 text-5xl font-bold">Add Observation</h1>

      <AddObservationForm />
    </main>
  );
}
