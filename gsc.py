import difflib
import hashlib
from PIL import Image
1
# Text Similarity Detection
def calculate_text_similarity(text1, text2):
    """
    Calculates the similarity ratio between two texts using difflib.
    """
    return difflib.SequenceMatcher(None, text1, text2).ratio()

def check_text_violation(original, potential, threshold=0.8):
    """
    Detects potential text violations and provides advice.
    """
    similarity = calculate_text_similarity(original, potential)
    status = "Violation Detected" if similarity > threshold else "No Violation"
    advice = "Add a hidden mark or code to your writing. Check online to see if someone copied it."
    return {"Similarity": round(similarity, 2), "Status": status, "Advice": advice}

# Image Similarity Detection
def calculate_image_hash(image_path):
    """
    Generates a hash for an image file.
    """
    with Image.open(image_path) as img:
        return hashlib.md5(img.tobytes()).hexdigest()

def check_image_violation(image1_path, image2_path):
    """
    Compares two images to check for similarity and provides advice.
    """
    hash1 = calculate_image_hash(image1_path)
    hash2 = calculate_image_hash(image2_path)
    status = "Violation Detected" if hash1 == hash2 else "No Violation"
    advice = "Write your name or a symbol on the image. Keep the original file as proof."
    return {"Similarity": "Identical" if hash1 == hash2 else "Different", "Status": status, "Advice": advice}

# Code Similarity Detection
def check_code_violation(original_code, new_code, threshold=0.8):
    """
    Detects potential code violations and provides advice.
    """
    similarity = difflib.SequenceMatcher(None, original_code, new_code).ratio()
    status = "Violation Detected" if similarity > threshold else "No Violation"
    advice = "Put your name and date in the code. Keep it private and share only with trusted people."
    return {"Similarity": round(similarity, 2), "Status": status, "Advice": advice}

# Audio/Video Advice
def audio_video_protection():
    return "Add your name or a special sound to your music or video. Use online tools to monitor copies."

# Generate Report
def generate_report(data, filename="report.txt"):
    """
    Saves the analysis results to a text file.
    """
    with open(filename, "w") as file:
        file.write("Intellectual Property Protection Report\n")
        file.write("-" * 40 + "\n")
        for key, value in data.items():
            file.write(f"{key}: {value}\n")
        file.write("-" * 40 + "\n")
    print(f"Report saved as {filename}")

# Main Menu
def main():
    print("Welcome to the Intellectual Property Protection System")
    print("Please select the type of intellectual property to check:")
    print("1. Text")
    print("2. Image")
    print("3. Code")
    print("4. Audio/Video Advice")
    choice = input("Enter your choice (1-4): ")

    if choice == "1":
        original = input("Enter the original text: ")
        potential = input("Enter the potentially copied text: ")
        result = check_text_violation(original, potential)
        print("Text Violation Check:")
        print(result)
        generate_report(result, "text_violation_report.txt")
    elif choice == "2":
        image1 = input("Enter the path to the original image: ")
        image2 = input("Enter the path to the comparison image: ")
        result = check_image_violation(image1, image2)
        print("Image Violation Check:")
        print(result)
        generate_report(result, "image_violation_report.txt")
    elif choice == "3":
        original_code = input("Enter the original code: ")
        new_code = input("Enter the potentially copied code: ")
        result = check_code_violation(original_code, new_code)
        print("Code Violation Check:")
        print(result)
        generate_report(result, "code_violation_report.txt")
    elif choice == "4":
        advice = audio_video_protection()
        print("Audio/Video Protection Advice:")
        print(advice)
        generate_report({"Advice": advice}, "audio_video_advice.txt")
    else:
        print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
