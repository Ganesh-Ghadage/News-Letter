
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function Component({error}) {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Error!</span> {error}
    </Alert>
  );
}
