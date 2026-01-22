export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
          <p className="text-green-600 text-xs mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold">567</p>
          <p className="text-green-600 text-xs mt-2">+8% from last week</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-600 text-sm font-medium mb-2">Completion Rate</h3>
          <p className="text-3xl font-bold">87%</p>
          <p className="text-green-600 text-xs mt-2">+3% improvement</p>
        </div>
      </div>
    </section>
  );
}
