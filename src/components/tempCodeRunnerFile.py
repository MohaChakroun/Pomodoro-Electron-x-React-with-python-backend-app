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