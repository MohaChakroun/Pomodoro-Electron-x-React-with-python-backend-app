import sys
import time
import threading

stop_flag = False
pause_flag = False
timer_thread = None

def timer(minutes):
    global stop_flag, pause_flag
    remaining = minutes
    pausedsec = 59
    while remaining > 0:
        if stop_flag:
            print("Timer stopped", flush=True)
            return
        if not pause_flag:
            if stop_flag:
                break
            elif pause_flag:
                pausedsec = i
                remaining += 1
                break
            elif pausedsec == 59:
                for i in range(59,-1,-1):
                    if stop_flag:
                        break
                    elif pause_flag:
                        pausedsec = i
                        remaining += 1
                        break
                    print(remaining,":",i, flush=True)  # send remaining minutes
                    time.sleep(1)
                remaining -= 1
            elif not (pause_flag or stop_flag or pausedsec == 59):
                    for i in range(pausedsec, -1, -1):
                        if stop_flag:
                            break
                        elif pause_flag:
                            pausedsec = i
                            remaining += 1
                            break
                        print(remaining,":",i, flush=True)  # send remaining minutes
                        time.sleep(1)

                    remaining -= 1
    print("1 session down", flush=True)

def handle_command(command):
    global stop_flag, pause_flag, timer_thread
    if command == "stop":
        stop_flag = True
        pause_flag = False
        return
    elif command == "pause":
        if pause_flag :
            pause_flag = False
        elif not pause_flag:
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
