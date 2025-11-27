export function WebGLFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bg-dark text-text-primary">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">3D Graphics Not Supported</h1>
        <p className="text-text-secondary">
          Your browser does not support 3D graphics. Please use a modern browser like Chrome, Firefox, or Edge.
        </p>
      </div>
    </div>
  );
}
