function Alerts(param) {
    return (
        <div>
            <div className={`alert alert-${param.type} alert-dismissible fade show`} role="alert">
  <strong>Alert:</strong> {param.text}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
    );
}

export default Alerts;