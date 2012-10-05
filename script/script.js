$(function () {
	var result = "<ul>";

	begin = function() { result += "<li>"; }
	end = function() { result += "</li>"; }

	// select
	begin();
	var marks = [4, 6, 3, 9, 4, 5, 3, 5, 8, 7, 5];
	var topmarks = _.select(marks, function(mark) { return mark >= 5; });
	_.select(topmarks, function(mark) { result += mark + " "; });
	end();

	// pluck
	begin();
	var students = [{ name: "John", mark: 5 }, { name: "Jane", mark: 7 }];
	var theirmarks = _.pluck(students, "mark");
	_.select(theirmarks, function(mark) { result += mark + " "; });
	end();

	// map
	begin();
	var students = [{ name: "John", mark: 5 }, { name: "Jane", mark: 7 }, { name: "Harry", mark: 3 }];
	var reports = _.map(students, function(student) { return student.name + " has obtained " + student.mark; });
	_.select(reports, function(report) { result += report + " / "; });
	end();

	// reduce
	begin();
	var students = [{ name: "John", mark: 5 }, { name: "Jane", mark: 7 }];
	var total = _.reduce(students, function(runningtotal, student) { return runningtotal + student.mark; }, 0);
	result += "Total " + total;
	end();

	// uniq
	begin();
	var marks = [4, 6, 3, 9, 4, 5, 3, 5, 8, 7, 5];
	var uniquemarks = _.uniq(marks);
	_.select(uniquemarks, function(mark) { result += mark + " "; });
	end();

	// range
	begin();
	var evens = _.range(0, 100, 2);
	_.select(evens, function(even) { result += even + " "; });
	end();

	// intersection (subset)
	begin();
	var evens = _.range(0, 100, 2);
	var fives = _.range(0, 100, 5);
	var commons = _.intersection(evens, fives);
	_.select(commons, function(common) { result += common + " "; });
	end();

	// keys and values
	begin();
	var student = { name: "John", mark: 5 };
	var keys = _.keys(student);
	var values = _.values(student);
	result += "Keys ";
	_.select(keys, function(key) { result += key + " "; });
	result += "Values ";
	_.select(values, function(value) { result += value + " "; });
	end();

	// template
	begin();
	var students = [{ name: "John", mark: 5 }, { name: "Jane", mark: 7 }];
	var count = _.size(students);
	var total = _.reduce(students, function(runningtotal, student) { return runningtotal + student.mark; }, 0);
	var average = total / count;
	var data = { count: count, average: average };
	var template = "There are <%= count %> students and their average mark is <%= average %>";
	result += _.template(template, data);
	end();

	// isEqual
	begin();
	var students1 = [{ name: "John", mark: 5, address: [ "Quatre-Bornes", "Mauritius" ] }, { name: "Jane", mark: 7 }];
	var students2 = [{ name: "John", mark: 5, address: [ "Quatre-Bornes", "mauritius" ] }, { name: "Jane", mark: 7 }];
	if (_.isEqual(students1, students2))
		result += "They are equal";
	else
		result += "They are not equal";
	end();

	result += "</ul>";
	$("#result").html(result);
});
