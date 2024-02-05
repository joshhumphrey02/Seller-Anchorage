import { addDays } from "date-fns";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface date {
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function QuickDate({ setDate }: date) {
	return (
		<Select
			onValueChange={(value) => setDate(addDays(new Date(), parseInt(value)))}>
			<SelectTrigger>
				<SelectValue placeholder="Select" />
			</SelectTrigger>
			<SelectContent position="popper">
				<SelectItem value="0">Today</SelectItem>
				<SelectItem value="1">Tomorrow</SelectItem>
				<SelectItem value="3">3 days</SelectItem>
				<SelectItem value="7">A week</SelectItem>
			</SelectContent>
		</Select>
	);
}

export default QuickDate;
