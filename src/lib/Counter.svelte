<script>
  let count = $state(0);

  function increment() {
    count += 1;
  }

  function decrement() {
    if (count > 0) {
      count -= 1;
    }
  }

  function clear() {
    count = 0;
  }
</script>

<section class="counter">
  <p class="eyebrow">Simple Counter</p>
  <h1 data-testid="count-value">{count}</h1>

  <div class="actions">
    <button
      type="button"
      data-testid="decrement-btn"
      onclick={decrement}
      disabled={count === 0}
    >
      Decrement
    </button>
    <button type="button" data-testid="increment-btn" onclick={increment}>
      Increment
    </button>
    <button type="button" data-testid="clear-btn" onclick={clear}>Clear</button>
  </div>
</section>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f5f7fb;
    color: #1f2937;
  }

  .counter {
    min-height: 100vh;
    display: grid;
    place-content: center;
    gap: 1.25rem;
    padding: 1.5rem;
    text-align: center;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #64748b;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 12vw, 5rem);
    line-height: 1;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  button {
    border: none;
    border-radius: 999px;
    padding: 0.8rem 1.3rem;
    font: inherit;
    font-weight: 600;
    color: #fff;
    background: #2563eb;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease,
      opacity 0.2s ease;
  }

  button:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
  }

  button:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    opacity: 0.8;
  }
</style>
