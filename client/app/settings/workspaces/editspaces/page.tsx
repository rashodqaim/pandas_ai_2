import React from "react";
import Link from "next/link";
import { GetAllDataSets } from "@/services/datasets";
import EditSpaceCard from "./EditSpaceCard";
import { GetWorkspaceDetails } from "@/services/spaces";

<<<<<<< HEAD
export const dynamic = 'force-dynamic';

export default async function EditWorkSpaces({ searchParams }) {
  const data = await GetAllDataSets();
  const workspaceDetails = await GetWorkspaceDetails(searchParams.id);
=======
export const dynamic = "force-dynamic";
>>>>>>> 719043c62bf9e0740854d7367f757bdf1d3ee6b3

export default async function EditWorkSpaces({ searchParams }) {
	const data = await GetAllDataSets();
	const workspaceDetails = await GetWorkspaceDetails(searchParams.id);

	return (
		<div className="w-full h-full overflow-y-auto custom-scroll mt-5 px-2 md:px-4">
			<h1 className="text-2xl font-bold dark:text-white mb-10">
				<Link href={`/settings/workspaces`}>Workspaces</Link>
				<small>
					<Link href={`/settings/workspaces/${searchParams.id}`}>
						<small>{workspaceDetails?.name && ` › ${workspaceDetails?.name}`}</small>
					</Link>{" "}
					› Edit
				</small>
			</h1>
			<EditSpaceCard datasets={data?.datasets} workspaceId={searchParams?.id} />
		</div>
	);
}
