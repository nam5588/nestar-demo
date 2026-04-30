import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "@/libs/components/layout/layoutBasic";

const Community:NextPage = () => {
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

export default withLayoutBasic(Community);
