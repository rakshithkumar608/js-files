# project related to DOM

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
console.log("rakshith")const express = require('express');
const app = express();

app.use(express.static('public')); // Serves files from the 'public' folder
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
          
        if(e.target.id === 'gray'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
});
});



```

## project 2 solution

```javascript
document.querySelector('form');
format.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
   
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       results.innerHTML = `<span>${bmi}</span>`;
    }
    });


```


### project 3 solution

```javascript 
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```

### D8 Consoles

```Javascript
D8Console::D8Console(Isolate* isolate)
    : isolate_(isolate), origin_(base::TimeTicks::Now()) {}

D8Console::~D8Console() { DCHECK_NULL(profiler_); }

void D8Console::DisposeProfiler() {
  if (profiler_) {
    if (profiler_active_) {
      profiler_->StopProfiling(String::Empty(isolate_));
      profiler_active_ = false;
    }
    profiler_->Dispose();
    profiler_ = nullptr;
  }
}

void D8Console::Assert(const debug::ConsoleCallArguments& args,
                       const v8::debug::ConsoleContext&) {
  // If no arguments given, the "first" argument is undefined which is
  // false-ish.
  if (args.Length() > 0 && args[0]->BooleanValue(isolate_)) return;
  WriteToFile("console.assert", stdout, isolate_, args);
  isolate_->ThrowError("console.assert failed");
}

void D8Console::Log(const debug::ConsoleCallArguments& args,
                    const v8::debug::ConsoleContext&) {
  WriteToFile(nullptr, stdout, isolate_, args);
}

void D8Console::Error(const debug::ConsoleCallArguments& args,
                      const v8::debug::ConsoleContext&) {
  WriteToFile("console.error", stderr, isolate_, args);
}

void D8Console::Warn(const debug::ConsoleCallArguments& args,
                     const v8::debug::ConsoleContext&) {
  WriteToFile("console.warn", stdout, isolate_, args);
}

void D8Console::Info(const debug::ConsoleCallArguments& args,
                     const v8::debug::ConsoleContext&) {
  WriteToFile("console.info", stdout, isolate_, args);
}

void D8Console::Debug(const debug::ConsoleCallArguments& args,
                      const v8::debug::ConsoleContext&) {
  WriteToFile("console.debug", stdout, isolate_, args);
}

void D8Console::Profile(const debug::ConsoleCallArguments& args,
                        const v8::debug::ConsoleContext&) {
  if (!profiler_) {
    profiler_ = CpuProfiler::New(isolate_);
  }
  profiler_active_ = true;
  profiler_->StartProfiling(String::Empty(isolate_), CpuProfilingOptions{});
}

void D8Console::ProfileEnd(const debug::ConsoleCallArguments& args,
                           const v8::debug::ConsoleContext&) {
  if (!profiler_) return;
  CpuProfile* profile = profiler_->StopProfiling(String::Empty(isolate_));
  profiler_active_ = false;
  if (!profile) return;
  if (Shell::HasOnProfileEndListener(isolate_)) {
    StringOutputStream out;
    profile->Serialize(&out);
    Shell::TriggerOnProfileEndListener(isolate_, out.result());
  } else {
    FileOutputStream out(kCpuProfileOutputFilename);
    profile->Serialize(&out);
  }
  profile->Delete();
}

void D8Console::Time(const debug::ConsoleCallArguments& args,
                     const v8::debug::ConsoleContext&) {
  if (i::v8_flags.correctness_fuzzer_suppressions) return;
  std::optional label = GetTimerLabel(args);
  if (!label.has_value()) return;
  if (!timers_.try_emplace(label.value(), base::TimeTicks::Now()).second) {
    printf("console.time: Timer '%s' already exists\n", label.value().c_str());
  }
}

void D8Console::TimeLog(const debug::ConsoleCallArguments& args,
                        const v8::debug::ConsoleContext&) {
  if (i::v8_flags.correctness_fuzzer_suppressions) return;
  std::optional label = GetTimerLabel(args);
  if (!label.has_value()) return;
  auto it = timers_.find(label.value());
  if (it == timers_.end()) {
    printf("console.timeLog: Timer '%s' does not exist\n",
           label.value().c_str());
    return;
  }
  base::TimeDelta delta = base::TimeTicks::Now() - it->second;
  printf("console.timeLog: %s, %f\n", label.value().c_str(),
         delta.InMillisecondsF());
}

void D8Console::TimeEnd(const debug::ConsoleCallArguments& args,
                        const v8::debug::ConsoleContext&) {
  if (i::v8_flags.correctness_fuzzer_suppressions) return;
  std::optional label = GetTimerLabel(args);
  if (!label.has_value()) return;
  auto it = timers_.find(label.value());
  if (it == timers_.end()) {
    printf("console.timeEnd: Timer '%s' does not exist\n",
           label.value().c_str());
    return;
  }
  base::TimeDelta delta = base::TimeTicks::Now() - it->second;
  printf("console.timeEnd: %s, %f\n", label.value().c_str(),
         delta.InMillisecondsF());
  timers_.erase(it);
}

void D8Console::TimeStamp(const debug::ConsoleCallArguments& args,
                          const v8::debug::ConsoleContext&) {
  if (i::v8_flags.correctness_fuzzer_suppressions) return;
  std::optional label = GetTimerLabel(args);
  if (!label.has_value()) return;
  base::TimeDelta delta = base::TimeTicks::Now() - origin_;
  printf("console.timeStamp: %s, %f\n", label.value().c_str(),
         delta.InMillisecondsF());
}

void D8Console::Trace(const debug::ConsoleCallArguments& args,
                      const v8::debug::ConsoleContext&) {
  if (i::v8_flags.correctness_fuzzer_suppressions) return;
  i::Isolate* i_isolate = reinterpret_cast<i::Isolate*>(isolate_);
  i_isolate->PrintStack(stderr, i::Isolate::kPrintStackConcise);
}
```



```
