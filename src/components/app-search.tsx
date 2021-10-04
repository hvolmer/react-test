export function AppSearch(props: any) {

  return (
    <div className="form-row">
      <div className="col-10">
        <input type="text" className="form-control form-control-sm" />
      </div>
      <div className="col-1 ml-2">
        <button className="btn btn-sm btn-outline-secondary">Search</button>

      </div>
    </div>
  );
}