import { FunctionalComponent, Fragment } from "preact";
import { useState } from "preact/hooks";

interface BibleVerse {
  book: string;
  chapter: number;
  verse: number;
  content: string;
}

const AudioBible: FunctionalComponent = () => {
  const [selectedBook, setSelectedBook] = useState<string>("Genesis");
  const [selectedChapter, setSelectedChapter] = useState<number>(1);

  const bibleVerses: BibleVerse[] = [
    {
      book: "Genesis",
      chapter: 1,
      verse: 1,
      content: "In the beginning, God created the heavens and the earth.",
    },
    {
      book: "Genesis",
      chapter: 1,
      verse: 2,
      content:
        "The earth was without form and void, and darkness was over the face of the deep.",
    },
    // Add more Bible verses here
  ];

  const handleBookChange = (event: Event): void => {
    const book = (event.target as HTMLSelectElement).value;
    setSelectedBook(book);
  };

  const handleChapterChange = (event: Event): void => {
    const chapter = parseInt((event.target as HTMLSelectElement).value, 10);
    setSelectedChapter(chapter);
  };

  const filteredVerses = bibleVerses.filter(
    (verse) => verse.book === selectedBook && verse.chapter === selectedChapter
  );

  const handlePlay = (): void => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  const handlePrevious = (): void => {
    if (selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    }
  };

  const handleNext = (): void => {
    // Get the maximum chapter number for the selected book
    const maxChapter = Math.max(
      ...bibleVerses
        .filter((verse) => verse.book === selectedBook)
        .map((verse) => verse.chapter)
    );

    if (selectedChapter < maxChapter) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  const handleSpeedChange = (event: Event): void => {
    const speed = (event.target as HTMLSelectElement).value;
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.playbackRate = parseFloat(speed);
  };

  const handleVolumeChange = (event: Event): void => {
    const volume = (event.target as HTMLInputElement).value;
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.volume = parseFloat(volume);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-4">Audio Bible</h1>
      <div className="flex justify-between mb-4">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="book"
          >
            Book
          </label>
          <select
            id="book"
            className="border border-gray-400 rounded px-4 py-2"
            value={selectedBook}
            onChange={handleBookChange}
            aria-label="Select book"
          >
            <option value="">-- Select Book --</option>
            <option value="Genesis">Genesis</option>
            {/* Add more book options */}
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="chapter"
          >
            Chapter
          </label>
          <select
            id="chapter"
            className="border border-gray-400 rounded px-4 py-2"
            value={selectedChapter.toString()}
            onChange={handleChapterChange}
            aria-label="Select chapter"
          >
            <option value="0">-- Select Chapter --</option>
            <option value="1">Chapter 1</option>
            {/* Add more chapter options */}
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {filteredVerses.map((verse) => (
          <Fragment key={`${verse.book}-${verse.chapter}-${verse.verse}`}>
            <p
              className="text-lg font-semibold"
              aria-label={`Verse ${verse.verse}`}
            >
              {verse.verse}
            </p>
            <p aria-label={`Content of verse ${verse.verse}`}>
              {verse.content}
            </p>
          </Fragment>
        ))}
      </div>
      {/* audio bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handlePrevious}
              aria-label="Previous Verse"
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handlePlay}
              aria-label="Previous Verse"
            >
              Play
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleNext}
              aria-label="Next Verse"
            >
              Next
            </button>
          </div>
          <div className="flex gap-2 my-auto">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="speed"
            >
              Speed
            </label>
            <select
              id="speed"
              className="border border-gray-400 rounded px-4 py-2"
              onChange={handleSpeedChange}
              aria-label="Select speed"
            >
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
            <label
              className="block text-gray-700 font-semibold mb-2 mt-2"
              htmlFor="volume"
            >
              Volume
            </label>
            <input
              type="range"
              id="volume"
              className="w-full"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.5"
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioBible;
