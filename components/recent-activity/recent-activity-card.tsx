export function RecentActivityCard() {
  return (
    <div className="flex justify-between rounded-md border border-black p-2">
      <div className="flex gap-5">
        <div>
          <div>Feb</div>
          <div>19</div>
        </div>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/101188065?s=96&v=4"
            alt=""
          />
        </div>
        <div>
          <div>Tiffin 19 Feb</div>
          <div className="border border-gray-400 flex rounded-md justify-center items-center bg-gray-300">
            <div> Flat 404</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          <div>Mahesh Tyagi Paid</div>
          <div>Rs 300</div>
        </div>
        <div className="flex flex-col">
          <div>Mahesh Lent You</div>
          <div>Rs 80</div>
        </div>
      </div>
    </div>
  );
}
