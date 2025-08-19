import sys
import time
import threading

stop_flag = False
pause_flag = False
timer_thread = None

def timer(minutes):
    global stop_flag, pause_flag
    remaining = minutes
    while remaining > 0:
        if stop_flag:
            print("Timer stopped", flush=True)
            return
        if not pause_flag:
            print(remaining, flush=True)  # send remaining minutes
            remaining -= 1
        time.sleep(60)
    print("1 session down", flush=True)

def handle_command(command):
    global stop_flag, pause_flag, timer_thread
    if command == "stop":
        stop_flag = True
        pause_flag = False
        return
    elif command == "pause":
        pause_flag = True
        return
    elif command == "resume":
        pause_flag = False
        return

    # Start new timer
    stop_flag = False
    pause_flag = False
    if command == "start_25m":
        timer_thread = threading.Thread(target=timer, args=(25,), daemon=True)
        timer_thread.start()
    elif command == "start_45m":
        timer_thread = threading.Thread(target=timer, args=(45,), daemon=True)
        timer_thread.start()
    elif command == "start_20m":
        timer_thread = threading.Thread(target=timer, args=(20,), daemon=True)
        timer_thread.start()
    else:
        print(f"Unknown command: {command}", flush=True)

print("Python backend started", flush=True)
for line in sys.stdin:
    handle_command(line.strip())
