# ChatGPT Conversation Import Workflow

## Overview

The import tool allows you to bring your ChatGPT conversations into the book platform, automatically categorize them, edit them, and tag them with authorship markers before adding them to chapters.

## Step-by-Step Workflow

### 1. Access the Import Tool

Navigate to `/research/born-into-the-machine/import` or click the "Import Conversation" button on the book landing page.

### 2. Copy Your ChatGPT Conversation

From ChatGPT, you can copy the conversation in several ways:

**Option A: Copy from ChatGPT Web Interface**
- Open your conversation in ChatGPT
- Select all messages (Cmd+A / Ctrl+A)
- Copy (Cmd+C / Ctrl+C)
- The format will be something like:
  ```
  You: Your question here
  
  ChatGPT: The AI response here
  ```

**Option B: Export from ChatGPT (if available)**
- Some ChatGPT interfaces allow JSON export
- The parser supports JSON format automatically

**Option C: Manual Copy**
- Copy each message individually
- Paste them in the format: `You: ...` or `ChatGPT: ...`

### 3. Paste and Parse

1. Paste your conversation into the text area
2. Click "Parse Conversation"
3. The system will automatically:
   - Detect user vs AI messages
   - Categorize messages into:
     - **Questions** - Messages containing "?"
     - **Vocabulary** - Messages about definitions/terms
     - **Personal Answers** - Your reflections/thoughts
     - **GPT Answers** - AI responses
     - **Other** - Everything else

### 4. Review and Edit

#### Filter by Category
Use the category buttons at the top to filter:
- **All** - See everything
- **Questions** - Just your questions
- **Vocabulary** - Terms and definitions
- **Personal** - Your personal reflections
- **GPT Answers** - AI responses only

#### Edit Individual Messages
1. Click the edit icon (✏️) on any message
2. Edit the content in the text area
3. Click "Save" to save changes
4. Edited messages are automatically marked as **◐ Hybrid** (co-written)

#### Change Categories
- Use the dropdown on each message to change its category
- This helps organize content for later use

#### Adjust Authorship Markers
- For GPT answers, you can change the authorship marker:
  - **○ AI** - Pure AI draft (default for GPT responses)
  - **◐ Hybrid** - You've edited it
  - **● Human** - You've rewritten it completely

### 5. Organize Your Content

As you scroll through, you can:

**Questions Section**
- Collect all your questions in one place
- These can become chapter prompts or research questions

**Vocabulary Section**
- Terms and definitions you want to use
- Can be extracted into a glossary

**Personal Answers**
- Your reflections and thoughts
- These are marked as **● Human** by default

**GPT Answers**
- AI-generated content
- Review carefully and mark appropriately:
  - Keep as **○ AI** if you want to critique it later
  - Change to **◐ Hybrid** if you've edited it
  - Change to **● Human** if you've rewritten it completely

### 6. Export Options

#### Copy as Markdown
- Click "Copy as Markdown"
- This copies all messages with their authorship markers
- Format: `● Your text` or `○ AI text` or `◐ Hybrid text`
- Paste this directly into a chapter file or the editor

#### Export as New Chapter (Coming Soon)
- Will create a new chapter file
- Organizes content by category
- Adds proper frontmatter

### 7. Add to Existing Chapter

After copying the markdown:
1. Go to the chapter editor (`/research/born-into-the-machine/[slug]/edit`)
2. Paste the markdown where you want it
3. The authorship markers will be preserved
4. Edit further as needed

## Tips

### Best Practices

1. **Review Before Importing**
   - Read through the conversation first
   - Identify what's valuable vs. what's "slop"

2. **Edit Aggressively**
   - Don't just copy-paste AI responses
   - Edit them to match your voice
   - Mark edited content as **◐ Hybrid**

3. **Extract Key Ideas**
   - Use the category system to separate:
     - Questions you're exploring
     - Vocabulary you want to define
     - Your personal insights
     - AI suggestions (to be critiqued)

4. **Use View Modes**
   - After importing, use the view mode toggle:
     - **Human Only** - See just your thoughts
     - **AI Only** - Review AI suggestions for critique
     - **Hybrid** - See co-written content

### Common Formats Supported

The parser handles:
- `You: ...` / `ChatGPT: ...`
- `User: ...` / `Assistant: ...`
- `Human: ...` / `AI: ...`
- JSON export format
- Markdown with headers

### Troubleshooting

**Messages not parsing correctly?**
- Make sure there's a clear separator (colon) between role and content
- Try adding "You:" or "ChatGPT:" prefixes manually

**Categories wrong?**
- You can manually change categories using the dropdown
- The auto-categorization is just a starting point

**Want to combine multiple conversations?**
- Parse them one at a time
- Copy the markdown from each
- Combine in the editor

## Example Workflow

1. **Copy conversation** from ChatGPT (1 month of back-and-forth)
2. **Paste and parse** - See 200+ messages organized
3. **Filter to "Questions"** - Extract 15 key questions you asked
4. **Filter to "Personal"** - Review your 30 personal reflections
5. **Filter to "GPT Answers"** - Review 150 AI responses
6. **Edit important GPT answers** - Mark as **◐ Hybrid** after editing
7. **Copy as Markdown** - Get formatted text with all markers
8. **Paste into chapter editor** - Add to your chapter
9. **Use view modes** - Toggle between human/AI/hybrid views
10. **Refine in editor** - Continue editing with AI assistant

This workflow gives you full control over what goes into your book while maintaining transparency about authorship.
