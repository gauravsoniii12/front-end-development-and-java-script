// # Read seven whole numbers: six lap times, then one late-entry time.
// # Put the first six into a list; keep the late entry separate.

// # Produce the eight report lines described in the problem.
// # Think about: which method sorts in place? which one removes AND returns an item?
// # Watch the order of operations, and don't assign the result of an in-place method.
// # 1. Read the six initial lap times and the late entry
// t1 = int(input())
// t2 = int(input())
// t3 = int(input())
// t4 = int(input())
// t5 = int(input())
// t6 = int(input())
// late_entry = int(input())

// # Put the first six times into a list
// times = [t1, t2, t3, t4, t5, t6]

// # 2. Print Recorded times
// print(f"Recorded times: {times}")

// # 3. Print Sorted times
// times.sort()
// print(f"Sorted: {times}")

// # 4. Print Podium (first three of the sorted list)
// print(f"Podium: {times[0:3]}")

// # 5. Print Fastest and Slowest
// print(f"Fastest: {times[0]}, Slowest: {times[-1]}")

// # 6. Disqualify the fastest time (remove the first item)
// disqualified = times.pop(0)
// print(f"Disqualified: {disqualified}")

// # 7. Add late entry to the end and print Updated list
// times.append(late_entry)
// print(f"Updated: {times}")

// # 8. Print Total
// total = sum(times)
// print(f"Total: {total}")

// # 9. Print Average formatted to 2 decimal places
// average = total / len(times)
// print(f"Average: {average:.2f}")