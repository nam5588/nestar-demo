import { useState } from "react";

const Community = () => {
	const [title, setTitle] = useState<string>("hello");
	return (
		<div>
			COMMUNITY{" "}
			<button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
				Press Me
			</button>
		</div>
	);
};

export default Community;
